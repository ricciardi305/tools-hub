FROM node:16-alpine

USER root

RUN apk update && apk add bash

WORKDIR /app

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]