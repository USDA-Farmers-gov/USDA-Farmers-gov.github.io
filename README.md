# Farmers.gov Design System Nuxt App

> This app is used to manage/develop the public Github site of the design system.

## Installation
Clone the repository into a local folder. To ensure the farmers submodule has all its files included, you must use the rescursive flag.

``` git clone https://github.com/USDA-Farmers-gov/farmers-design-system-nuxt.git --recursive ```

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Publish to Public Site
To publish flat files to the public site, run the script:

``` $ ./publish-public-site.sh ```

If your working branch is not clean, a prompt will come up with the git status message. You can confirm whether you still want to publish or not.

**WARNING:** The publishing process creates a generic commit message. It's not intended to be used for this repo and will be included here if you publish without committing local changes first. 

**It's highly recommended you only publish with a clean branch.**

For a detailed explanation on Nuxt, check out [Nuxt.js docs](https://nuxtjs.org).
