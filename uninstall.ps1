# ==============================================================================
# Antigravity 2.0 - Откат к оригинальной версии (Rollback / Uninstall)
# ==============================================================================

param(
    [string]$AppDir = "$env:LOCALAPPDATA\Programs\antigravity"
)

$Host.UI.RawUI.WindowTitle = "Откат русской версии Antigravity"
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "   Antigravity 2.0 - Восстановление оригинала (EN)       " -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

$ResourcesDir = "$AppDir\resources"
$BackupAsar = "$ResourcesDir\app.asar.original_backup"
$TargetAsar = "$ResourcesDir\app.asar"
$RuBundle = "$ResourcesDir\web_bundle_ru"

if (Test-Path $BackupAsar) {
    Write-Host "[*] Восстановление оригинального app.asar из резервной копии..." -ForegroundColor Cyan
    Copy-Item -Path $BackupAsar -Destination $TargetAsar -Force
    Write-Host "[+] Оригинальный app.asar восстановлен." -ForegroundColor Green
} else {
    Write-Host "[!] Резервная копия app.asar.original_backup не найдена." -ForegroundColor Red
}

if (Test-Path $RuBundle) {
    Write-Host "[*] Удаление папки web_bundle_ru..." -ForegroundColor Cyan
    Remove-Item -Path $RuBundle -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "[+] Папка web_bundle_ru удалена." -ForegroundColor Green
}

# Очистка отдельной тестовой версии
$IsolatedDir = "$env:LOCALAPPDATA\Programs\antigravity_ru"
if (Test-Path $IsolatedDir) {
    $del = Read-Host "Удалить также отдельную версию Antigravity RU из $IsolatedDir? (y/n)"
    if ($del -eq 'y' -or $del -eq 'д') {
        Get-Process -Name "Antigravity" -ErrorAction SilentlyContinue | Where-Object { $_.Path -like "*antigravity_ru*" } | Stop-Process -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 1
        Remove-Item -Path $IsolatedDir -Recurse -Force -ErrorAction SilentlyContinue
        $DesktopLnk = Join-Path ([System.Environment]::GetFolderPath([System.Environment+SpecialFolder]::Desktop)) "Antigravity RU.lnk"
        if (Test-Path $DesktopLnk) { Remove-Item $DesktopLnk -Force }
        Write-Host "[+] Отдельная версия удалена." -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Green
Write-Host "  Откат завершён. Перезапустите Antigravity.              " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
Write-Host ""
