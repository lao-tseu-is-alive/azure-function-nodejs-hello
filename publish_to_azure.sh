#!/bin/bash
#adjust your resource group according to your case
PREFIX=lao-tseu-is-alive
PROJECT=azure-function-nodejs-hello
RESOURCEGROUP=${PREFIX}-${PROJECT}-resource-group$(openssl rand -hex 5)
STORAGEACCT=storage$(openssl rand -hex 5)
FUNCTIONAPP=${PREFIX}-${PROJECT}-functions-$(openssl rand -hex 5)

az storage account create \
  --resource-group "$RESOURCEGROUP" \
  --name "$STORAGEACCT" \
  --kind StorageV2 \
  --location centralus

az functionapp create \
  --resource-group "$RESOURCEGROUP" \
  --name "$FUNCTIONAPP" \
  --storage-account "$STORAGEACCT" \
  --runtime node \
  --consumption-plan-location centralus \
  --functions-version 2

func publish $FUNCTIONAPP
