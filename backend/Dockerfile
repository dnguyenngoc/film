FROM python:3.9-buster

LABEL maintainer="Duy Nguyen <duyngunyenngoc@hotmail.com>"

WORKDIR /app/

COPY ./requirements.txt requirements.txt

COPY ./app/ /app/

RUN pip3 install -r requirements.txt

RUN chmod +x migrations/restore.sh

# ENTRYPOINT [ "migrations/restore.sh && python3 main.py" ]

EXPOSE 8080