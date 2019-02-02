FROM node
WORKDIR /usr/app
COPY . .
RUN yarn
RUN yarn build:server

ENV NODE_ENV=production
EXPOSE 4000
CMD cd ./packages/server && node ./server/dist/index.js