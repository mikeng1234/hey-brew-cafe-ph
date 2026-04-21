@echo off
title Hey Brew Cafe PH — Dev Server
start "Hey Brew Dev Server" cmd /k "cd /d "%~dp0" && npm run dev -- --port 3005"
timeout /t 4 /nobreak >nul
start "" "chrome.exe" "http://localhost:3005"
exit
