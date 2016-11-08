#!/bin/sh

set -e

CG_REPOS=$(find . -name .git -type d -prune | grep -Eo 'identity-.+/' | cut -d '/' -f 1)

for repo in $CG_REPOS; do
  gource --output-custom-log "$repo.txt" "$repo"
done
