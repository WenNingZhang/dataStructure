#!/bin/bash -e
commit_message="$1"
git add . 
git commit -m "$commit_message" --amend --author="zhangwinning <1527841714@qq.com>"
git pull
git push
