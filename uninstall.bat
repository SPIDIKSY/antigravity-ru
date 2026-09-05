@echo off
chcp 65001 >nul
title Восстановление оригинальной версии Google Antigravity
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0uninstall.ps1"
pause
