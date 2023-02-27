#!/bin/zsh

# exec killall node & 
echo
echo 'Running server...'
node ./index.js &
echo 'Server on!'

echo
echo "Open firefox\n"
exec /Applications/Firefox.app/Contents/MacOS/./firefox -private-window "http://localhost:2000" &

# zsh

read -p "Press enter to continue"

exec killall node & 

echo "\nFINISH"