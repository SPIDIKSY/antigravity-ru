@echo off
chcp 65001 >nul
title Русификатор Google Antigravity 2.0
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0install.ps1"
pause
