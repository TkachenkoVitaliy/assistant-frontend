#! /bin/bash
echo 'start deploy'
echo 'remove old container'
docker rm --force front
echo 'remove old image'
docker rmi --force frontend
echo 'build docker image'
docker build -t frontend .
echo 'run docker container'
docker run -d -it -p 80:80 --restart always --name front frontend
echo 'connect container to dockernet network'
docker network inspect dockernet >/dev/null 2>&1 || docker network create --driver bridge dockernet
docker network connect dockernet front
echo 'complete!!!'