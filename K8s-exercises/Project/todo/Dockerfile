FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY --chown=node:node . .

RUN npm install

USER node

CMD [ "npm", "start" ]