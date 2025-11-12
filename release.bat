@echo off
echo ========================================
echo Building Lot Pips Calculator Extension
echo ========================================
echo.

echo [1/3] Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo [2/3] Building extension...
call npm run build
if errorlevel 1 (
    echo ERROR: Failed to build extension
    pause
    exit /b 1
)

echo.
echo [3/3] Creating release ZIP...
cd build\chrome-mv3-prod
powershell -command "Compress-Archive -Path * -DestinationPath ..\..\lot-pips-calculator.zip -Force"
cd ..\..

echo.
echo ========================================
echo SUCCESS! Extension built successfully
echo ========================================
echo.
echo Output files:
echo - Extension folder: build\chrome-mv3-prod
echo - ZIP file: lot-pips-calculator.zip
echo.
echo Next steps:
echo 1. Upload lot-pips-calculator.zip to GitHub Releases
echo 2. Or load build\chrome-mv3-prod folder directly in browser
echo.
pause
