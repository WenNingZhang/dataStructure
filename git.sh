#!/bin/bash -e
commit_message="$1"
git add -u
git reset -- git.sh
git commit -m "$commit_message"
git push
