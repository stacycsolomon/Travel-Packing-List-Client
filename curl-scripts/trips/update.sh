#!/bin/bash

TOKEN="8de10008ca0f240f88177a0aa8857707"
ID="6255d496d1cb1b490a307c97"
DESTINATION="Kingston"
DATE="03/03/2022"
LENGTHOFSTAY="2"

API="http://localhost:4741"
URL_PATH="/trips"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "trip": {
      "destination": "'"${DESTINATION}"'",
      "date": "'"${DATE}"'",
      "length": "'"${LENGTHOFSTAY}"'"
    }
  }'

echo