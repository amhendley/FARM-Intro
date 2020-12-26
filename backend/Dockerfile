FROM alpine
MAINTAINER amhendley@gmail.com<Andrew M Hendley>

RUN mkdir -p /app

COPY / /app/

WORKDIR /app

RUN apk add gcc make musl-dev python3 python3-dev py3-pip libuv
RUN ln -s /usr/bin/python3 /usr/bin/python
RUN pip install -r requirements.txt

EXPOSE 8000

CMD [ "python", "main.py" ]
