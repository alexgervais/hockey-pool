FROM node:19-alpine

RUN mkdir /hockey-pool
WORKDIR /hockey-pool

COPY package.json package.json
RUN npm install

COPY ./config ./config
COPY ./locales ./locales
COPY ./public ./public
COPY ./routes ./routes
COPY ./views ./views
COPY ./pool.js ./pool.js

ENTRYPOINT node ./pool.js
