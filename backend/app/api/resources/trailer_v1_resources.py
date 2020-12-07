from flask import Blueprint
from flask import jsonify
from flask import request
from utils import ( 
    exception, _response
)
from security.wraps import token_required

router = Blueprint('trailer_v1_resources', __name__)

@router.route('/api/v1/trailer', methods = ["GET"])
def fetch_phimle():
    if request.method == "GET":
        return 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
    return exception.custom405()




