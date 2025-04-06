@echo off
echo === GIT AUTO PUSH SCRIPT ===

:: 1. Сначала пулл
echo.
echo Pulling latest changes...
git pull origin main --rebase

:: 2. Добавляем все файлы
echo.
echo Adding files...
git add .

:: 3. Спрашиваем у пользователя коммит-сообщение
set /p msg="Enter commit message: "

:: 4. Коммит
git commit -m "%msg%"

:: 5. Пуш
echo.
echo Pushing to origin/main...
git push origin main

echo.
echo === Done! ===
pause
