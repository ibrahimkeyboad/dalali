FROM node:18.16.1-alpine3.18
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package*.json .
COPY . . 
RUN npm install
ENV key=value
EXPOSE 3000