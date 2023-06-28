FROM node:18.16.0-alpine3
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY . . 
RUN npm install
ENV key=value
EXPOSE 3000