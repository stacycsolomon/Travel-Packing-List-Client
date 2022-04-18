#!/bin/bash

API="https://aqueous-hollows-41580.herokuapp.com/"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo