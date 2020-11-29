# Name: main.py
# Author: Duy Nguyen Ngoc
# Date: 2020/10/10
# Description:
#   A back end basic with cors using flask 


############################ Import ###########################################
from flask import (
    Flask
)
import logging
from flask_cors import CORS
from database.db import (
    db_session
)
from settings import config


logger = logging.getLogger(__name__)


############################ Initialization ###################################
app = Flask(__name__)
# this essitial for Cross Origin Resource Sharing with React frontend
# https://flask-cors.readthedocs.io/en/latest/

CORS(app)


@app.teardown_appcontext
def teardown_appcontext(exeption = None):
    db_session.remove()


from api import router
from security import wraps # can no needed but i think have will load with app


############################ Main Function ####################################
if __name__ == "__main__":
    # run backend server on http://localhost:8080/
    app.run(host = '0.0.0.0',port=8080, debug=config.DEBUG)