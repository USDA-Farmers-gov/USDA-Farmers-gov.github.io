#! /bin/bash
# Before running this script for the first time, run this command 
# to add the public site repository:
# git subtree add --prefix=dist https://github.com/mcalvert2089/mcalvert2089.github.io master

#npm run generate
#rm dist/README.md
if [ -z "$(git status --porcelain)" ]; then 
  echo "up to date"
else 
  echo "ERROR: Please commit app updates before rebuilding site."
fi
#git add .
#git commit -m "website rebuilt"
#git subtree push --prefix=dist https://github.com/mcalvert2089/mcalvert2089.github.io master
