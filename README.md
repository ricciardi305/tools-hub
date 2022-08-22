# Challenge-BossaBox
Repository for BossaBox back end challenge

## Instructions to start the application

### After cloning the repository

You need to have [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed on your environment

 - Run the command `sudo docker-compose` up to start the application in the docker container
 - Run the command `docker exec tools_hub yarn typeorm migration:run -d src/data-source.ts` to run the typeorm migrations
 
You can access the api documentation at [localhost](http://localhost:3000/api-docs/)
