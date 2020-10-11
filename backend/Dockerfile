FROM tiangolo/uwsgi-nginx-flask:python3.8

LABEL maintainer="Duy Nguyen <duyngunyenngoc@hotmail.com>"

WORKDIR /app/

COPY ./requirements.txt requirements.txt

COPY ./app/ /app/

RUN pip3 install -r requirements.txt

EXPOSE 80

ENTRYPOINT ["python3","main.py"]