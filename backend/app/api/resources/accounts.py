from flask import Blueprint
from flask import jsonify
from flask import request

router = Blueprint('accounts', __name__)

############################ ACCOUNTS API Implementation ###########################
@router.route('/accounts/login', methods = ["POST"])
def login():
    data_dict = {
        "content": "account login chua lam nha"
    }
    return jsonify(data_dict), 200
