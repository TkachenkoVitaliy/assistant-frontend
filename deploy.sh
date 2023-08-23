#! /bin/bash
echo 'start deploy'
echo 'remove docker containers and images'
docker rm --force front
docker system prune -f
echo 'pull last version from gitlab'
git pull origin
echo 'build docker image'
docker build -t frontend .
echo 'run docker container'
docker run -d -it -p 80:80 --restart always --name front frontend
echo 'deploy completed'