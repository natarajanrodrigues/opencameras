#!/bin/zsh

echo
echo 'Running server...'
node /Users/natarajan/BNB_projects/cameras/index.js &
echo 'Server on!'

echo
echo "Open firefox"
exec /Applications/Firefox.app/Contents/MacOS/./firefox -private-window "http://localhost:2000" &

zsh
