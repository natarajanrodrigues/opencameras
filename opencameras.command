#!/bin/zsh

echo
echo 'Running server...'
node /Users/natarajanrodrigues/projects/opencameras/index.js &
echo 'Server on!'
sleep 1
echo
echo "Open firefox"
exec /Applications/Firefox.app/Contents/MacOS/./firefox -private-window "http://localhost:2000" &

zsh
