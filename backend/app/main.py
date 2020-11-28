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

from rabbitMQ.amqpstorm import RpcClient
from time import sleep


# Logger
logger = logging.getLogger(__name__)


############################ Initialization ###################################
app = Flask(__name__)
# this essitial for Cross Origin Resource Sharing with React frontend
# https://flask-cors.readthedocs.io/en/latest/
CORS(app)


# TEST RPC ASYN
@app.route('/rpc_call/<payload>')
def rpc_call(payload):
    """Simple Flask implementation for making asynchronous Rpc calls. """

    # Send the request and store the requests Unique ID.
    corr_id = rpc_client.send_request(payload)

    # Wait until we have received a response.
    while rpc_client.queue[corr_id] is None:
        sleep(0.1)

    # Return the response to the user.
    return rpc_client.queue[corr_id]


@app.teardown_appcontext
def teardown_appcontext(exeption = None):
    db_session.remove()


from api import router
from security import wraps # can no needed but i think have will load with app


############################ Main Function ####################################
if __name__ == "__main__":
    # run backend server on http://localhost:8080/
    rpc_client = RpcClient('localhost', 'admin', '1q2w3e4r', 'rpc_queue')
    app.run(host = '0.0.0.0',port=8080, debug=config.DEBUG)