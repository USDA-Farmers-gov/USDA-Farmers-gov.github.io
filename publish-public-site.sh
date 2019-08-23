#! /bin/bash
# Before running this script for the first time, run this command 
# to add the public site repository:
# git subtree add --prefix=dist https://github.com/mcalvert2089/mcalvert2089.github.io master
#
# Changes in the app must be committed to the repo before you can rebuild the site.
# This is to prevent the commit message for the Github site from being used in the app repo.

# if [ -z "$(git status --porcelain)" ]; then 
  npm run generate
  rm dist/README.md
  git add .
  git commit -m "website rebuilt"
  git subtree push --prefix=dist https://github.com/mcalvert2089/mcalvert2089.github.io master
# else 
#   echo "ERROR: Please commit app updates before rebuilding site."
# fi
