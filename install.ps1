<#
.SYNOPSIS
    Antigravity 2.0 — Установщик русской локализации (Open Source)
.DESCRIPTION
    Устанавливает или удаляет русификацию десктопного приложения Antigravity 2.0.
    Поддерживает запуск одной строкой через консоль:
    irm https://raw.githubusercontent.com/SPIDIKSY/antigravity-ru/main/install.ps1 | iex
.LINK
    https://github.com/SPIDIKSY/antigravity-ru
#>

param(
    [switch]$Install,
    [switch]$Uninstall,
    [string]$AppDir = "$env:LOCALAPPDATA\Programs\antigravity"
)

$Host.UI.RawUI.WindowTitle = "Antigravity 2.0 - Русификатор"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "        Antigravity 2.0 - Русская локализация (RU)        " -ForegroundColor Green
Write-Host "     Репозиторий: https://github.com/SPIDIKSY/antigravity-ru" -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Проверка установки Antigravity
if (-not (Test-Path "$AppDir\Antigravity.exe")) {
    Write-Host "[!] Antigravity не найден в стандартном каталоге: $AppDir" -ForegroundColor Yellow
    $AppDir = Read-Host "Введите полный путь к каталогу с Antigravity.exe"
    if (-not (Test-Path "$AppDir\Antigravity.exe")) {
        Write-Host "[-] Ошибка: Antigravity.exe не найден по указанному пути. Прерывание." -ForegroundColor Red
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

# Проверяем, откуда запущен скрипт: локально или через веб (iex / WebClient)
$ScriptDir = $PSScriptRoot
$IsRemote = $false

if ([string]::IsNullOrWhiteSpace($ScriptDir) -or (-not (Test-Path "$ScriptDir\resources\app.asar"))) {
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
        if ($extractedRoot -and (Test-Path (Join-Path $extractedRoot.FullName "resources\app.asar"))) {
            $ScriptDir = $extractedRoot.FullName
        } else {
            $ScriptDir = Join-Path $TempDir "antigravity-ru-main"
        }

        if (-not (Test-Path "$ScriptDir\resources\app.asar")) {
            throw "Не удалось обнаружить распакованные ресурсы в загруженном архиве."
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

try {
    # 1. Резервная копия оригинального ядра Google
    if (-not (Test-Path $BackupAsar)) {
        if (Test-Path $TargetAsar) {
            Write-Host "[*] Создание резервной копии оригинального app.asar..." -ForegroundColor Cyan
            Copy-Item -Path $TargetAsar -Destination $BackupAsar -Force
            Write-Host "[+] Резервная копия сохранена: app.asar.original_backup" -ForegroundColor Green
        }
    } else {
        Write-Host "[*] Резервная копия уже существует: app.asar.original_backup" -ForegroundColor Gray
    }

    # 2. Копирование интерфейсного бандла web_bundle_ru
    Write-Host "[*] Копирование языкового бандла (web_bundle_ru)..." -ForegroundColor Cyan
    if (-not (Test-Path $TargetBundle)) {
        New-Item -ItemType Directory -Path $TargetBundle -Force | Out-Null
    }
    Copy-Item -Path "$ScriptDir\resources\web_bundle_ru\*" -Destination $TargetBundle -Recurse -Force

    # 3. Копирование русифицированного app.asar
    Write-Host "[*] Установка локализованного ядра Electron (app.asar)..." -ForegroundColor Cyan
    Copy-Item -Path "$ScriptDir\resources\app.asar" -Destination $TargetAsar -Force

    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "  Русификация Antigravity 2.0 успешно установлена!  " -ForegroundColor Green
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
