#!/bin/bash

TOKEN="d1eb3b0ad4563177d3c9cf328c47b1b7"

API="http://localhost:4741"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo