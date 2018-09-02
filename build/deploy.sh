#!/bin/bash

docker build -t moosedev/blockbuster-react-nginx .
docker push moosedev/blockbuster-react-nginx

ssh moose@142.93.105.156 << EOF 
docker pull moosedev/blockbuster-react-nginx:latest
docker stop blockbuster || true
docker rm blockbuster || true
docker rmi moosedev/blockbuster-react-nginx:current || true
docker tag moosedev/blockbuster-react-nginx:latest moosedev/blockbuster-react-nginx:current
docker run -d --restart always --name blockbuster -p 8001:80 moosedev/blockbuster-react-nginx
EOF
