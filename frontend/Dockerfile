FROM tiangolo/uwsgi-nginx-flask:python3.8

LABEL maintainer="Duy Nguyen <duyngunyenngoc@hotmail.com>"

RUN apk --update add bash nano

WORKDIR /backend

COPY ./requirements.txt requirements.txt

COPY ./app /app

RUN pip install -r requirements.txt

EXPOSE 80

ENTRYPOINT ["python3","./backend/app/main.py"]