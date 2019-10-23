#! /bin/bash
# Before running this script on a new repo for the first time, run this command 
# to add the public site repository:
# git subtree add --prefix=dist https://github.com/USDA-Farmers-gov/USDA-Farmers-gov.github.io master
#
# Changes in the app must be committed to the repo before you can rebuild the site.
# This is to prevent the generic commit message for the Github site from being used in the Nuxt app repo.

if [ ! -z "$(git status --porcelain)" ]; 
  echo 'You have uncommitted changes to the app. Please type a commit message here (or ctrl-c to exit): '
  read gitmessage
then
  # make commit for app
  git add .
  git commit -m gitmessage
  git push
fi
  npm run generate
  git add .
  git commit -m "website rebuilt"
  git subtree push --prefix=dist https://github.com/USDA-Farmers-gov/USDA-Farmers-gov.github.io master
  git subtree push --prefix=dist https://github.com/mcalvert2089/mcalvert2089.github.io master
