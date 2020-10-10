from flask import Blueprint
from flask import jsonify
from flask import request

router = Blueprint('test_api', __name__)

############################ TEST API Implementation ###########################
@router.route('/test_api', methods = ["GET"])
def init_api():
    data_dict = {
        "content": "test api with 200"
    }
    return jsonify(data_dict), 200
