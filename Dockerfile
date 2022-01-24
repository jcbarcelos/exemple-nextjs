FROM node:14
WORKDIR /home/app
COPY . .
RUN apt update && apt upgrade -y
RUN npm install yarn
RUN yarn


