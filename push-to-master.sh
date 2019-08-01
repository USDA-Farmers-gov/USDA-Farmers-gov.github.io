#! /bin/bash
# Before running this script for the first time, create the flat file site first 
# by running 'npm run generate' and then use this command to make sure Github knows about your subtree:
# git subtree add --prefix=dist https://github.com/mcalvert2089/mcalvert2089.github.io master

npm run generate
git add .
git commit -m "rebuilding files from script"
git subtree push --prefix dist origin master