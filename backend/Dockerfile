#===============================================
#========  Using Node js build Imange ==========
#===============================================
FROM python:3.8-buster

LABEL maintainer="Duy Nguyen <duyngunyenngoc@hotmail.com>"

ENV PYTHONPATH "${PYTHONPATH}:/app"

WORKDIR /app/

RUN pip3 install pipenv

COPY Pipfile* /app/

RUN pipenv lock --requirements > requirements.txt

RUN pip3 install -r requirements.txt

COPY ./app/ /app/

RUN chmod +x migrations/restore.sh

# ENTRYPOINT [ "migrations/restore.sh && python3 main.py" ]

EXPOSE 8080