FROM alpine
MAINTAINER amhendley@gmail.com<Andrew M Hendley>

RUN mkdir -p /app
COPY / /app/

WORKDIR /app

RUN apk add npm
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
