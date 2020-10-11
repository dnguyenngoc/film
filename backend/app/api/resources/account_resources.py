from flask import Blueprint
from flask import jsonify
from flask import request
from flask import render_template
from app.utils import exception

router = Blueprint('accounts', __name__)

############################ ACCOUNTS API Implementation ###########################
@router.route('/accounts/login', methods = ["POST", "GET"])
def login():
    if request.method == "GET":
        return render_template("app/template/login.html")
    elif request.method == "POST":
        data_dict = {
            "content": "account login chua lam nha"
        }
        return jsonify(data_dict), 200
    else:
        return exception.custom405()
