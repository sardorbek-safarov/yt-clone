#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: ./create-feature.sh <feature-name>"
  exit 1
fi

nest g module $1 &&
nest g controller $1 &&
nest g service $1
