#!/bin/bash

FILES=/var/log/tomcat8/rotated/*
instanceid=$(/opt/aws/bin/ec2-metadata --instance-id | cut -d " " -f 2)
regex=".*\.txt-([0-9]*)-([0-9]*)-([0-9]*)-([0-9]*)\.lzo"
version="v1"
tagversion="tag-v1"
bucket="yieldify-aa-stream-production"
logtype="raw"

for f in $FILES
do
    if [[ "$f" =~ $regex ]]
    then
        echo "Processing $f correctly"
        timestamp="${BASH_REMATCH[4]}"
        date_path=$(date -d @$timestamp +"%Y/%m/%d/%Y-%m-%d-%H")
        path=$bucket/$version/$tagversion/${logtype}/${date_path}_${instanceid}_${timestamp}.lzo
        count=`aws s3 ls s3://$path | wc -l`

        if [[ $count -gt 0 ]]; then
            echo "s3://$path already exists. Not uploading"
        else
            aws s3 cp $f s3://$path
        fi
    else
        echo "$f doesnt match regex"
    fi
done

