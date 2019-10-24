#! /bin/bash
# Before running this script on a new repo for the first time, run this command 
# to add the public site repository:
# git subtree add --prefix=dist https://github.com/USDA-Farmers-gov/USDA-Farmers-gov.github.io master
#
# Changes in the app must be committed to the repo before you can rebuild the site.
# This is to prevent the generic commit message for the Github site from being used in the Nuxt app repo.

  publish() {
    npm run generate
    git add .
    git commit -m "website rebuilt"
    git subtree push --prefix=dist https://github.com/USDA-Farmers-gov/USDA-Farmers-gov.github.io master
  }

  status=$(git status --porcelain)

  if [ ! -z "$status" ]; then 
    printf "\e[1;37;41mCurrent branch not clean.\e[0m\n"
    echo ''
    echo 'Git status message:'
    echo '==================='
    echo "$status"
    echo ''

    while true; do
      read -p "Publish anyways (y|n)?" yn
        case $yn in
            [Yy]* ) publish; break;;
            [Nn]* ) exit;;
            * ) echo "Please answer yes or no.";;
        esac
    done
  fi

 publish;


