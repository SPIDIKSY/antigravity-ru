# ==============================================================================
# Antigravity 2.0 - Русификатор (Russian Localization)
# Репозиторий: https://github.com/
# ==============================================================================

param(
    [ValidateSet("main", "isolated", "interactive")]
    [string]$Mode = "interactive",
    [string]$AppDir = "$env:LOCALAPPDATA\Programs\antigravity"
)

$Host.UI.RawUI.WindowTitle = "Русификатор Google Antigravity 2.0"
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "     Google Antigravity 2.0 - Русификатор (RU)           " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# 1. Проверка пути Antigravity
if (-not (Test-Path "$AppDir\Antigravity.exe")) {
    Write-Host "[!] Antigravity не найден в стандартном каталоге: $AppDir" -ForegroundColor Yellow
    $AppDir = Read-Host "Введите полный путь к папке с Antigravity.exe"
    if (-not (Test-Path "$AppDir\Antigravity.exe")) {
        Write-Host "[-] Ошибка: Antigravity.exe не найден. Прерывание." -ForegroundColor Red
        Pause
        exit 1
    }
}
Write-Host "[+] Обнаружен Google Antigravity: $AppDir" -ForegroundColor Green
Write-Host ""

# 2. Выбор режима установки
if ($Mode -eq "interactive") {
    Write-Host "Выберите вариант установки:" -ForegroundColor Yellow
    Write-Host " [1] Русифицировать ОСНОВНУЮ версию Antigravity (Рекомендуется)" -ForegroundColor White
    Write-Host "     • Сохраняет все ваши проекты, чаты, профиль, сессии и логины."
    Write-Host "     • Автоматически создаёт резервную копию для отката."
    Write-Host ""
    Write-Host " [2] Создать ОТДЕЛЬНУЮ тестовую версию (Antigravity RU)" -ForegroundColor White
    Write-Host "     • Создаёт изолированную копию в Programs\antigravity_ru."
    Write-Host "     • Свой отдельный профиль и ярлык на Рабочем столе."
    Write-Host ""
    
    $choice = Read-Host "Введите номер (1 или 2) [по умолчанию 1]"
    if ($choice -eq "2") {
        $Mode = "isolated"
    } else {
        $Mode = "main"
    }
}

# --- РЕЖИМ 1: ОСНОВНАЯ ВЕРСИЯ ---
if ($Mode -eq "main") {
    Write-Host ""
    Write-Host "[*] Выбран режим: Русификация основной версии" -ForegroundColor Cyan

    $ResourcesDir = "$AppDir\resources"
    $TargetAsar = "$ResourcesDir\app.asar"
    $TargetBundle = "$ResourcesDir\web_bundle_ru"
    $BackupAsar = "$ResourcesDir\app.asar.original_backup"

    # Резервная копия
    if (-not (Test-Path $BackupAsar)) {
        Write-Host "[*] Создание резервной копии оригинального app.asar..." -ForegroundColor Cyan
        Copy-Item -Path $TargetAsar -Destination $BackupAsar -Force
    }

    # Копирование веб-бандла
    Write-Host "[*] Установка интерфейсного словаря и стилей (web_bundle_ru)..." -ForegroundColor Cyan
    if (-not (Test-Path $TargetBundle)) {
        New-Item -ItemType Directory -Path $TargetBundle -Force | Out-Null
    }
    Copy-Item -Path "$ScriptDir\resources\web_bundle_ru\*" -Destination $TargetBundle -Recurse -Force

    # Установка русифицированного app.asar
    Write-Host "[*] Установка локализованного ядра Electron..." -ForegroundColor Cyan
    $SourceAsar = "$ScriptDir\resources\app.asar.main_app"
    Copy-Item -Path $SourceAsar -Destination $TargetAsar -Force

    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "  Основная версия Antigravity успешно русифицирована!    " -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "• Все ваши проекты, чаты и настройки полностью сохранены." -ForegroundColor White
    Write-Host "• Чтобы увидеть изменения: перезапустите Antigravity." -ForegroundColor White
    Write-Host "• Для отката запустите uninstall.bat" -ForegroundColor Gray
}

# --- РЕЖИМ 2: ИЗОЛИРОВАННАЯ ВЕРСИЯ ---
if ($Mode -eq "isolated") {
    $IsolatedDir = "$env:LOCALAPPDATA\Programs\antigravity_ru"
    Write-Host ""
    Write-Host "[*] Выбран режим: Создание отдельной версии в $IsolatedDir" -ForegroundColor Cyan

    # Закрытие запущенных процессов русской версии
    Get-Process -Name "Antigravity" -ErrorAction SilentlyContinue | Where-Object { $_.Path -like "*antigravity_ru*" } | Stop-Process -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 1

    if (-not (Test-Path $IsolatedDir)) {
        New-Item -ItemType Directory -Path $IsolatedDir -Force | Out-Null
    }

    Write-Host "[*] Копирование системных файлов..." -ForegroundColor Cyan
    Robocopy $AppDir $IsolatedDir /E /XD "web_bundle_ru" /XF "app.asar" /NDL /NFL /NJH /NJS | Out-Null

    Write-Host "[*] Установка русифицированного ядра и словаря..." -ForegroundColor Cyan
    Copy-Item -Path "$ScriptDir\resources\app.asar.isolated" -Destination "$IsolatedDir\resources\app.asar" -Force
    $TargetBundle = "$IsolatedDir\resources\web_bundle_ru"
    if (-not (Test-Path $TargetBundle)) {
        New-Item -ItemType Directory -Path $TargetBundle -Force | Out-Null
    }
    Copy-Item -Path "$ScriptDir\resources\web_bundle_ru\*" -Destination $TargetBundle -Recurse -Force

    # Профиль и ярлык
    $ProfileDir = "$env:USERPROFILE\.gemini\antigravity_ru_profile"
    if (-not (Test-Path $ProfileDir)) {
        New-Item -ItemType Directory -Path $ProfileDir -Force | Out-Null
    }

    Write-Host "[*] Создание ярлыка 'Antigravity RU' на Рабочем столе..." -ForegroundColor Cyan
    $WshShell = New-Object -ComObject WScript.Shell
    $DesktopPath = [System.Environment]::GetFolderPath([System.Environment+SpecialFolder]::Desktop)
    $ShortcutPath = Join-Path $DesktopPath "Antigravity RU.lnk"
    $Shortcut = $WshShell.CreateShortcut($ShortcutPath)
    $Shortcut.TargetPath = "$IsolatedDir\Antigravity.exe"
    $Shortcut.WorkingDirectory = $IsolatedDir
    $Shortcut.IconLocation = "$IsolatedDir\Antigravity.exe,0"
    $Shortcut.Description = "Google Antigravity 2.0 (Русская версия)"
    $Shortcut.Save()

    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "  Изолированная версия успешно установлена!              " -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "• Ярлык на Рабочем столе: 'Antigravity RU'" -ForegroundColor White
}

Write-Host ""
