# Name: main.py
# Author: Duy Nguyen Ngoc
# Date: 2020/10/10
# Description:
#   A back end basic with cors using flask 

############################ Import ###########################################
from flask import (
    Flask
)
from flask_cors import CORS

from database.db import (
    db_session, mysql, cursor
)
############################ Initialization ###################################
app = Flask(__name__)
# this essitial for Cross Origin Resource Sharing with React frontend
# https://flask-cors.readthedocs.io/en/latest/

CORS(app)

@app.teardown_appcontext
def teardown_appcontext(exeption = None):
    db_session.remove()
    mysql.close()

from api import router

############################ Main Function ####################################
if __name__ == "__main__":
    # run backend server on http://localhost:80/
    app.run(host = '0.0.0.0',port=80, debug=True)