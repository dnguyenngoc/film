from flask import Blueprint
from flask import jsonify
from flask import request
from utils import exception
from flask import render_template
from flask import abort

router = Blueprint('accounts', __name__)

############################ ACCOUNTS API Implementation ###########################
@router.route('/account/login', methods = ["POST", "GET"])
def login():
    if request.method == "POST":
        data_dict = {
            "content": "account login chua lam nha"
        }
        return jsonify(data_dict), 200
    elif request.method == "GET":
        return render_template("login.html")
    return exception.custom405()
