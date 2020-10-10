# Name: main.py
# Author: Duy Nguyen Ngoc
# Date: 2020/10/10
# Description:
#   A back end basic with cors using flask 

############################ Import ###########################################
from flask import Flask
from flask_cors import CORS
from app.api.router import router as routers

############################ Initialization ###################################
app = Flask(__name__)
# this essitial for Cross Origin Resource Sharing with React frontend
# https://flask-cors.readthedocs.io/en/latest/
CORS(app)

# config load all router from api folder
for routes in routers:
    app.register_blueprint(routes)

############################ Main Function ####################################
if __name__ == "__main__":
    # run backend server on http://localhost:80/
    app.run(host = 'localhost',port=80, debug=True)