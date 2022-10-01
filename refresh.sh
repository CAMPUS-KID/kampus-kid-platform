git checkout dev
git pull
git branch --merged dev | grep -v "^\* dev" | xargs -n 1 -r git branch -d