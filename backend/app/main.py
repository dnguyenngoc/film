# Name: main.py
# Author: Duy Nguyen Ngoc
# Date: 2020/10/10
# Description:
#   A back end basic with cors using flask 

############################ Import ###########################################
from flask import (
    Flask, render_template
)
from flask_cors import CORS

from app.database.db import (
    db_session, mysql, cursor
)

############################ Initialization ###################################
app = Flask(__name__)
# this essitial for Cross Origin Resource Sharing with React frontend
# https://flask-cors.readthedocs.io/en/latest/
CORS(app)

@app.teardown_appcontext
def teardown_appcontext(response_or_exc):
    db.remove()
    cursor.close()
    mysql.close()


# config load all router from api folder
# routers = router.get_router()
# for routes in routers:
#     app.register_blueprint(routes)


@app.route('/', methods=['GET'])
def index():
    return render_template('home.html')


############################ Main Function ####################################
if __name__ == "__main__":
    # run backend server on http://localhost:80/
    app.run(host = 'localhost',port=80, debug=True)