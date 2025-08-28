#!/bin/sh
if [ -z "$DB_HOST" ]; then
  echo "DB_HOST not set"
  exit 1
fi

exec node index.js