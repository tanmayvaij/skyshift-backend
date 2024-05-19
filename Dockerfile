FROM node:22-alpine3.18
WORKDIR /app
COPY . /app
RUN yarn
RUN yarn build
EXPOSE 5000
CMD yarn start
