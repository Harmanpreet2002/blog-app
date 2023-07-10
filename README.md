<!-- DOCKER COMPOSE RUN COMMAND FOR DEV ENVIRONMENT -->

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

DOCKER COMPOSE RUN COMMAND FOR PRODUCTION ENVIRONMENT

docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

URL FOR REQUEST ON THE HOME PAGE

http://localhost:3000/api/v1

GET REQUEST FOR ALL THE POSTS

http://localhost:3000/api/v1/posts

