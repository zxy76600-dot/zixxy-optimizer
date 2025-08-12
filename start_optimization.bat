@echo off
title Zixxy's Ultimate Phone Optimization Panel
color 0A

echo =============================================
echo   🚀 Starting Zixxy's Ultimate Optimizer...
echo =============================================
echo.

:: Check if Node.js is installed
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed.
    echo Please install it from https://nodejs.org
    pause
    exit /b
)

:: Install dependencies if not already installed
if not exist node_modules (
    echo Installing required dependencies...
    npm install
)

:: Start the server
echo Launching server...
npm start

pause
