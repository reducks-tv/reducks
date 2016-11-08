#!/bin/sh

set -e

TXT_FILES=$(ls "$1")

for file in $TXT_FILES ; do
  repo=$(echo "$file" | cut -d '.' -f 1)
  sed -i -r "s#\(.+\)\|#\1|/butts#" "$file"
done
