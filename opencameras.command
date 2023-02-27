# #!/bin/zsh

# echo
# echo 'Running server...'
# node ./index.js &
# echo 'Server on!'
# sleep 1
# echo
# echo "Open firefox"
# exec /Applications/Firefox.app/Contents/MacOS/./firefox -private-window "http://localhost:2000" &

# zsh


#!/bin/zsh

# exec killall node & 

echo
echo 'Running server...'
node /Users/natarajanrodrigues/projects/opencameras/index.js &
echo 'Server on!'

echo
echo "Open firefox\n"
exec /Applications/Firefox.app/Contents/MacOS/./firefox -private-window "http://localhost:2000" &

# zsh

read -p "Press enter to continue"

exec killall node & 

echo "\nFINISH"