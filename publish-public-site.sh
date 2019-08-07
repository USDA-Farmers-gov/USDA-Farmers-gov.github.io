#! /bin/bash
# Before running this script for the first time, run this command 
# to add the public site repository:
# git subtree add --prefix=dist https://github.com/mcalvert2089/mcalvert2089.github.io master

npm run generate
rm dist/README.md
git add .
git commit -m "rebuilding files from script"
git subtree push --prefix=dist https://github.com/mcalvert2089/mcalvert2089.github.io master
