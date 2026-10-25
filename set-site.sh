#!/bin/sh
# Usage: ./set-site.sh https://your-user.github.io/your-repo/
# Rewrites the absolute site address used for link previews (Open Graph) in index.html and m/*.
[ -z "$1" ] && { echo "Usage: $0 https://your-user.github.io/your-repo/"; exit 1; }
NEW="$1"; case "$NEW" in */) ;; *) NEW="$NEW/";; esac
OLD="https://chiuta.github.io/monstrarium/"
find . -name '*.html' -exec sed -i "s#$OLD#$NEW#g" {} +
sed -i "s#$OLD#$NEW#g" index.html
echo "Done: $OLD -> $NEW"
