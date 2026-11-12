<#
.SYNOPSIS
    Antigravity 2.0 — Установщик русской локализации (Open Source)
.DESCRIPTION
    Устанавливает или удаляет русификацию десктопного приложения Antigravity 2.0.
    Команда установки одной строкой есть в README репозитория.
.NOTES
    Файл сохранять без метки кодировки BOM: с ней установка одной строкой из README
    перестаёт работать в Windows PowerShell 5.1.
.LINK
    https://github.com/SPIDIKSY/antigravity-ru
#>

param(
    [switch]$Install,
    [switch]$Uninstall,
    [switch]$NoKill,
    [switch]$Force,
    [string]$AppDir = ""
)

# Поддерживаемые версии Antigravity, для которых подготовлены файлы в resources\<версия>\.
$SupportedVersions = @("2.25.0", "2.26.0", "2.28.0", "2.29.0", "2.29.1", "2.31.0", "2.31.2")

$Host.UI.RawUI.WindowTitle = "Antigravity 2.0 - Русификатор"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "    Antigravity 2.0 (v$($SupportedVersions -join ', ')) - Русская локализация (RU)   " -ForegroundColor Green
Write-Host "     Репозиторий: https://github.com/SPIDIKSY/antigravity-ru" -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

$StandardAppDir = "$env:LOCALAPPDATA\Programs\antigravity"

# Приводит введённый путь к папке: его часто вставляют в кавычках и вместе с именем файла.
function Get-AppFolder([string]$Path) {
    return $Path.Trim(' ', '"', "'") -replace '[\\/]+Antigravity\.exe$', ''
}

function Test-AppFolder([string]$Dir) {
    return $Dir -and (Test-Path -LiteralPath "$Dir\Antigravity.exe" -PathType Leaf -ErrorAction SilentlyContinue)
}

# Места поиска, начиная с самого вероятного. Скрипт могут запустить от другой учётной записи,
# и тогда $env:LOCALAPPDATA указывает не на профиль того, у кого установлен Antigravity.
function Get-AppFolderCandidates {
    $StandardAppDir

    Get-Process -Name "Antigravity" -ErrorAction SilentlyContinue |
        Where-Object { $_.Path } |
        ForEach-Object { Split-Path -Parent $_.Path }

    # Установщик оставляет InstallLocation пустым, путь к программе есть только в DisplayIcon.
    $uninstallKeys = @(
        "HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*",
        "HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*",
        "HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*"
    )
    Get-ItemProperty -Path $uninstallKeys -ErrorAction SilentlyContinue | ForEach-Object {
        if ($_.DisplayIcon -match '^"?(.+?)[\\/]Antigravity\.exe') { $Matches[1] }
    }

    Get-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList\*" -ErrorAction SilentlyContinue |
        ForEach-Object { "$($_.ProfileImagePath)\AppData\Local\Programs\antigravity" }
}

# 1. Поиск Antigravity: сначала папка из -AppDir, потом остальные места.
$RequestedDir = Get-AppFolder $AppDir
$AppDir = @($RequestedDir) + @(Get-AppFolderCandidates) | Where-Object { Test-AppFolder $_ } | Select-Object -First 1

if ($RequestedDir -and $AppDir -ne $RequestedDir) {
    Write-Host "[!] Antigravity.exe не найден в папке: $RequestedDir" -ForegroundColor Yellow
}
if (-not $AppDir) {
    Write-Host "[!] Не удалось найти Antigravity автоматически." -ForegroundColor Yellow
    Write-Host "    Укажите папку, в которой лежит Antigravity.exe. Например: $StandardAppDir" -ForegroundColor Gray
    $AppDir = Get-AppFolder (Read-Host "Введите путь к папке с Antigravity.exe")
    if (-not (Test-AppFolder $AppDir)) {
        Write-Host "[-] Ошибка: Antigravity.exe не найден в папке: $AppDir. Прерывание." -ForegroundColor Red
        return
    }
}
Write-Host "[+] Каталог Antigravity 2.0: $AppDir" -ForegroundColor Green

# 2. Определение режима работы
if (-not $Install -and -not $Uninstall) {
    if ([Console]::IsInputRedirected -or [string]::IsNullOrWhiteSpace($PSScriptRoot)) {
        # При запуске через веб-конвейер (irm | iex) автоматический выбор режима установки
        $Install = $true
    } else {
        Write-Host ""
        Write-Host "Выберите действие:" -ForegroundColor Yellow
        Write-Host " [1] Установить русификацию (Рекомендуется)" -ForegroundColor White
        Write-Host "     • Полный перевод интерфейса, меню, трея и настроек."
        Write-Host "     • Проекты, чаты, профиль и ключи API остаются нетронутыми."
        Write-Host "     • Создаётся резервная копия оригинального ядра."
        Write-Host ""
        Write-Host " [2] Удалить русификацию (Восстановить официальный оригинал)" -ForegroundColor White
        Write-Host "     • Возвращает оригинальный английский app.asar от Google."
        Write-Host ""
        Write-Host " [0] Отмена" -ForegroundColor Gray
        Write-Host ""
        $choice = Read-Host "Введите номер действия [1]"
        if ($choice -eq "2") {
            $Uninstall = $true
        } elseif ($choice -eq "0") {
            Write-Host "[*] Отменено пользователем." -ForegroundColor Yellow
            return
        } else {
            $Install = $true
        }
    }
}

$ResourcesDir = Join-Path $AppDir "resources"
$TargetAsar = Join-Path $ResourcesDir "app.asar"
$BackupAsar = Join-Path $ResourcesDir "app.asar.original_backup"
$TargetBundle = Join-Path $ResourcesDir "web_bundle_ru"

# --- РЕЖИМ УДАЛЕНИЯ (ВОССТАНОВЛЕНИЕ ОРИГИНАЛА) ---
if ($Uninstall) {
    Write-Host ""
    Write-Host "[*] Восстановление оригинальной версии от Google..." -ForegroundColor Cyan

    # Закрываем Antigravity перед изменениями
    if (-not $NoKill) {
        $proc = Get-Process -Name "Antigravity" -ErrorAction SilentlyContinue
        if ($proc) {
            Write-Host "[*] Закрытие запущенных процессов Antigravity..." -ForegroundColor Yellow
            $proc | Stop-Process -Force -ErrorAction SilentlyContinue
            $timeout = 10
            while ((Get-Process -Name "Antigravity" -ErrorAction SilentlyContinue) -and ($timeout -gt 0)) {
                Start-Sleep -Milliseconds 500
                $timeout--
            }
            Start-Sleep -Seconds 1
        }
    } else {
        Write-Host "[*] Параметр -NoKill: пропуск закрытия процессов Antigravity." -ForegroundColor Gray
    }

    if (Test-Path $BackupAsar) {
        Copy-Item -Path $BackupAsar -Destination $TargetAsar -Force
        Write-Host "[+] Оригинальный app.asar успешно восстановлен из резервной копии." -ForegroundColor Green
    } else {
        Write-Host "[!] Резервная копия app.asar.original_backup не найдена. Файл app.asar не изменён." -ForegroundColor Yellow
    }

    if (Test-Path $TargetBundle) {
        Remove-Item -Path $TargetBundle -Recurse -Force
        Write-Host "[+] Каталог web_bundle_ru удалён." -ForegroundColor Green
    }

    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "  Оригинальная версия Antigravity 2.0 восстановлена!" -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Green
    return
}

# --- РЕЖИМ УСТАНОВКИ ---
Write-Host ""
Write-Host "[*] Подготовка к установке русификатора..." -ForegroundColor Cyan

# Проверка версии: до загрузки и до закрытия Antigravity, чтобы при отказе ничего не трогать.
$AppVersion = (Get-Item "$AppDir\Antigravity.exe").VersionInfo.FileVersion
$ChosenVersion = $null
if ($SupportedVersions -contains $AppVersion) {
    $ChosenVersion = $AppVersion
} else {
    Write-Host "[!] У вас Antigravity $AppVersion, а русификатор поддерживает версии: $($SupportedVersions -join ', ')." -ForegroundColor Yellow
    if (-not $Force) {
        Write-Host "[-] Установка отменена: файлы от другой версии могут сломать приложение." -ForegroundColor Red
        Write-Host "    Обновите Antigravity или запустите установку с параметром -Force:" -ForegroundColor White
        Write-Host "    & ([scriptblock]::Create((irm https://raw.githubusercontent.com/SPIDIKSY/antigravity-ru/main/install.ps1))) -Force" -ForegroundColor Gray
        return
    }
    $ChosenVersion = $SupportedVersions[$SupportedVersions.Count - 1]
    Write-Host "[*] Параметр -Force: устанавливается набор для $ChosenVersion (самый новый доступный)." -ForegroundColor Yellow
}

# Проверяем, откуда запущен скрипт: локально или через веб (iex / WebClient)
$ScriptDir = $PSScriptRoot
if ([string]::IsNullOrWhiteSpace($ScriptDir) -and (Test-Path (Join-Path (Get-Location).Path "resources\$ChosenVersion\app.asar"))) {
    $ScriptDir = (Get-Location).Path
}
$IsRemote = $false

if ([string]::IsNullOrWhiteSpace($ScriptDir) -or (-not (Test-Path "$ScriptDir\resources\$ChosenVersion\app.asar"))) {
    $IsRemote = $true
}

$TempDir = $null
if ($IsRemote) {
    Write-Host "[*] Загрузка актуальных файлов локализации с GitHub..." -ForegroundColor Cyan
    $ZipUrl = "https://github.com/SPIDIKSY/antigravity-ru/archive/refs/heads/main.zip"
    $TempDir = Join-Path $env:TEMP ("antigravity_ru_" + [guid]::NewGuid().ToString().Substring(0, 8))
    $TempZip = "$TempDir.zip"

    New-Item -ItemType Directory -Path $TempDir -Force | Out-Null
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        $oldProgress = $ProgressPreference
        $ProgressPreference = 'SilentlyContinue'
        Invoke-WebRequest -Uri $ZipUrl -OutFile $TempZip -UseBasicParsing
        $ProgressPreference = $oldProgress
        Expand-Archive -Path $TempZip -DestinationPath $TempDir -Force
        
        $extractedRoot = Get-ChildItem -Path $TempDir -Directory | Select-Object -First 1
        if ($extractedRoot -and (Test-Path (Join-Path $extractedRoot.FullName "resources\$ChosenVersion\app.asar"))) {
            $ScriptDir = $extractedRoot.FullName
        } else {
            $ScriptDir = Join-Path $TempDir "antigravity-ru-main"
        }

        if (-not (Test-Path "$ScriptDir\resources\$ChosenVersion\app.asar")) {
            throw "Не удалось обнаружить распакованные ресурсы для версии $ChosenVersion в загруженном архиве."
        }
        Write-Host "[+] Файлы успешно загружены." -ForegroundColor Green
    } catch {
        Write-Host "[-] Ошибка загрузки архива: $_" -ForegroundColor Red
        if ($TempDir -and (Test-Path $TempDir)) { Remove-Item -Path $TempDir -Recurse -Force -ErrorAction SilentlyContinue }
        if ($TempZip -and (Test-Path $TempZip)) { Remove-Item -Path $TempZip -Force -ErrorAction SilentlyContinue }
        return
    }
}

# Закрываем Antigravity перед заменой файлов
if (-not $NoKill) {
    $proc = Get-Process -Name "Antigravity" -ErrorAction SilentlyContinue
    if ($proc) {
        Write-Host "[*] Закрытие запущенных процессов Antigravity..." -ForegroundColor Yellow
        $proc | Stop-Process -Force -ErrorAction SilentlyContinue
        $timeout = 10
        while ((Get-Process -Name "Antigravity" -ErrorAction SilentlyContinue) -and ($timeout -gt 0)) {
            Start-Sleep -Milliseconds 500
            $timeout--
        }
        Start-Sleep -Seconds 1
    }
} else {
    Write-Host "[*] Параметр -NoKill: пропуск закрытия процессов Antigravity." -ForegroundColor Gray
}

try {
    # 1. Резервная копия оригинального ядра Google
    $isClean = $false
    if (Test-Path $TargetAsar) {
        $hasWebBundle = [IO.File]::ReadAllText($TargetAsar, [Text.Encoding]::GetEncoding(28591)).Contains('web_bundle_ru')
        if (-not $hasWebBundle) {
            $isClean = $true
        }
    }

    if ($isClean) {
        Write-Host "[*] Обнаружен чистый оригинальный app.asar, сохранение в резервную копию..." -ForegroundColor Cyan
        Copy-Item -Path $TargetAsar -Destination $BackupAsar -Force
        Write-Host "[+] Резервная копия сохранена: app.asar.original_backup" -ForegroundColor Green
    } else {
        if (Test-Path $BackupAsar) {
            Write-Host "[*] Резервная копия уже существует: app.asar.original_backup" -ForegroundColor Gray
        } else {
            Write-Host "[!] Внимание: текущий app.asar уже модифицирован, а резервная копия отсутствует. Откат будет невозможен." -ForegroundColor Yellow
        }
    }

    # 2. Копирование интерфейсного бандла web_bundle_ru
    Write-Host "[*] Копирование языкового бандла (web_bundle_ru для $ChosenVersion)..." -ForegroundColor Cyan
    if (Test-Path $TargetBundle) {
        Remove-Item -Path $TargetBundle -Recurse -Force
    }
    New-Item -ItemType Directory -Path $TargetBundle -Force | Out-Null
    Copy-Item -Path "$ScriptDir\resources\$ChosenVersion\web_bundle_ru\*" -Destination $TargetBundle -Recurse -Force

    # 3. Копирование русифицированного app.asar
    Write-Host "[*] Установка локализованного ядра Electron (app.asar для $ChosenVersion)..." -ForegroundColor Cyan
    Copy-Item -Path "$ScriptDir\resources\$ChosenVersion\app.asar" -Destination $TargetAsar -Force

    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "  Русификация Antigravity 2.0 (набор v$ChosenVersion) успешно установлена!  " -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "• Все ваши проекты, чаты, сессии и ключи полностью сохранены." -ForegroundColor White
    Write-Host "• Запустите Antigravity 2.0, чтобы начать работу на русском!" -ForegroundColor White
    Write-Host "• Для отката запустите скрипт с параметром -Uninstall" -ForegroundColor Gray
    Write-Host ""
} catch {
    Write-Host "[-] Ошибка установки: $_" -ForegroundColor Red
} finally {
    # Очистка временных файлов загрузки
    if ($TempDir -and (Test-Path $TempDir)) {
        Remove-Item -Path $TempDir -Recurse -Force -ErrorAction SilentlyContinue
    }
    if ($TempZip -and (Test-Path $TempZip)) {
        Remove-Item -Path $TempZip -Force -ErrorAction SilentlyContinue
    }
}
