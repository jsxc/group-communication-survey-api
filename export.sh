#!/bin/bash

MONGODB_DOCKER_CONTAINER_NAME=group-communication-survey-mongodb
MONGODB_CREDENTIALS_ENV_FILE=.env
MONGODB_AUTH_DATABASE=admin
MONGODB_DATABASE=group-communication-survey
MONGODB_COLLECTION=survey-results
MONGODB_EXPORT_TYPE=csv
MONGODB_FIELDS_FILE=/var/mongodb/meta/fields.txt
MONGODB_EXPORT_FILE=/var/mongodb/exports/`date +%s`.csv

MONGODB_USERNAME=$(awk -F '=' '/MONGODB_USERNAME/ { print $2 }' $MONGODB_CREDENTIALS_ENV_FILE)
MONGODB_PASSWORD=$(awk -F '=' '/MONGODB_PASSWORD/ { print $2 }' $MONGODB_CREDENTIALS_ENV_FILE)

sudo docker exec $MONGODB_DOCKER_CONTAINER_NAME \
      mongoexport \
        -u $MONGODB_USERNAME \
        -p $MONGODB_PASSWORD \
        --authenticationDatabase $MONGODB_AUTH_DATABASE \
        --db $MONGODB_DATABASE \
        --collection $MONGODB_COLLECTION \
        --type=$MONGODB_EXPORT_TYPE \
        --fieldFile=$MONGODB_FIELDS_FILE \
        --out=$MONGODB_EXPORT_FILE
