npm run generate
rm -rf docs
cp -r dist docs
git add .
git commit -m "generating doc files"
git push