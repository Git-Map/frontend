#!/bin/bash
cd build
git init
git remote add origin git@github.com:Git-Map/Git-Map.github.io.git
git add .
git commit -m "Updates"
git push --force --set-upstream origin master
echo Published
