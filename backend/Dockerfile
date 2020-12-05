FROM python:3.8-buster

LABEL maintainer="Duy Nguyen <duyngunyenngoc@hotmail.com>"

WORKDIR /app/

RUN pip3 install pipenv

COPY Pipfile* /app/

RUN cd /app && pipenv lock --requirements > requirements.txt

# COPY ./requirements.txt /app/requirements.txt

RUN pip3 install -r /app/requirements.txt

COPY ./app/ /app/

RUN chmod +x migrations/restore.sh

# ENTRYPOINT [ "migrations/restore.sh && python3 main.py" ]

EXPOSE 8080