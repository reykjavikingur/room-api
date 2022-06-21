#!/bin/bash

curl 'http://127.0.0.1:3000/rooms' \
  -H 'Content-Length: 0' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Host: http://127.0.0.1:3000' \
  -H 'Origin: http://127.0.0.1:3000' \
  -H 'Pragma: no-cache' \
  -H 'Proxy-Connection: close' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36' \
  --data-raw '' \

