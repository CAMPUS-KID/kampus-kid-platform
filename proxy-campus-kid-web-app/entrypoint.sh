#!/usr/bin/env sh
set -eu

envsubst '${HOST} ${HOST_PORT}' < /tmp/app.nginx > /etc/nginx/conf.d/default.conf

nginx -g "daemon off;"