#!/bin/bash
ls -l
if [ "${DOMAIN}" = "localhost" ]; then
    echo 'Deploy server on localhost..........'
    export DOMAIN
    envsubst '${DOMAIN}' < local_nginx.conf > /etc/nginx/conf.d/app.conf
else
    echo 'Deploy server on staging or prodution.........'
    export DOMAIN
    envsubst '${DOMAIN}' < prod_nginx.conf > /etc/nginx/conf.d/app.conf
fi
exec "$@"
