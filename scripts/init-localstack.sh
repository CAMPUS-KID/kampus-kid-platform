#!/bin/bash
LOCALSTACK_HOST="host.docker.internal"

# Localstack helper variables
LOCALSTACK_PORT="4010"
LOCALSTACK_ENDPOINT="http://${LOCALSTACK_HOST}:${LOCALSTACK_PORT}"

# Dynamo helper variables
DYNAMO_TABLE_DOCUMENT_DRAFT_BATCH="document_draft_batch_dev"

# SQS helper variables
SQS_QUEUE_DOCUMENT_DRAFT_BATCH="document_draft_update_dev"
SQS_QUEUE_DOCUMENT_DRAFT_BATCH_DLQ="document_draft_update_dlq_dev"

cat <<EOF >> ~/.aws/config
[default]
output = json
region = us-east-2
EOF

echo "Creating dynamodb table ${DYNAMO_TABLE_DOCUMENT_DRAFT_BATCH}"
aws --endpoint-url=${LOCALSTACK_ENDPOINT} dynamodb create-table --table-name ${DYNAMO_TABLE_DOCUMENT_DRAFT_BATCH} \
    --attribute-definitions AttributeName=batch_id,AttributeType=S AttributeName=template_id,AttributeType=N \
    --key-schema AttributeName=batch_id,KeyType=HASH AttributeName=template_id,KeyType=RANGE\
    --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1

echo "Creating sqs queue ${SQS_QUEUE_DOCUMENT_DRAFT_BATCH}"
aws --endpoint-url=${LOCALSTACK_ENDPOINT} sqs create-queue --queue-name ${SQS_QUEUE_DOCUMENT_DRAFT_BATCH}

echo "Creating sqs queue ${SQS_QUEUE_DOCUMENT_DRAFT_BATCH_DLQ}"
aws --endpoint-url=${LOCALSTACK_ENDPOINT} sqs create-queue --queue-name ${SQS_QUEUE_DOCUMENT_DRAFT_BATCH_DLQ}

echo "Local stack initalized"
