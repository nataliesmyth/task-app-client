#!/bin/sh

API="http://localhost:4741"
URL_PATH="/tasks"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo

# ID="5f697308d7bb3889de756ec3"

# TOKEN="d19c181d6ef0c58cc18b419ab9befe2d"