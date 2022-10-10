#!/bin/bash
echo "Listing SQS Queues from LocalStack"
aws --endpoint-url=http://localhost:4566 sqs list-queues --region=us-east-2

echo "Listing DynamoDB Tables from LocalStack"
aws --endpoint-url=http://localhost:4566 dynamodb list-tables
