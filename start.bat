@echo off

REM Start the client
start "Client" cmd /k "cd client && npm run dev"

REM Start the server
start "Server" cmd /k "cd server && nodemon index.js"
