#!/bin/bash
APITOKEN=<redacted>
ZONEID=<redacted>

curl -X GET "https://api.cloudflare.com/client/v4/zones/${ZONEID}/dns_records?page=1&per_page=300" \
	-H "Authorization: Bearer ${APITOKEN}" \
	-H "Content-Type: application/json" > dns_records.json

# iterate through zones.json and get the zone id

for i in $(jq -r '.result[] | .id' dns_records.json); do
    curl -X DELETE "https://api.cloudflare.com/client/v4/zones/${ZONEID}/dns_records/${i}" \
        -H "Authorization: Bearer ${APITOKEN}" \
        -H "Content-Type: application/json"
done