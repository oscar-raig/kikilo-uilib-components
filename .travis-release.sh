  #!/bin/sh

# get all the commits log for creating the correct Changelog
git pull --unshallow 2>&1 >/dev/null
# define names
git config --global user.email "oscar.raig@gmail.com"
git config --global user.name "oscar-raig"
# Remove existing "origin"
git remote rm origin
# Add new "origin" with access token in the git URL for authentication
git remote add origin https://oscar-raig:${GH_TOKEN}@github.com/oscar-raig/kikilo-uilib-components.git > /dev/null 2>&1
# move to master before release
git checkout master
# get the latest master changes
git pull origin master
# release new packages
echo "releasing"
./node_modules/.bin/sui-mono release
