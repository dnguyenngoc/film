from flask import Blueprint
from flask import jsonify
from flask import request
from utils import ( 
    exception, _response
)
from security.wraps import token_required
from api.entities import phim_request as _res
from api.controllers import phimmoi_controllers as control


router = Blueprint('phimmoi_v1_resources', __name__)

@router.route('/api/v1/phimmoi', methods = ["GET"])
def fetch_by_name():
    if request.method == "GET":
        name = request.query_string
        # if _res.FetchByName(form).validate():
        return control.fetch_by_name(name)
        # return exception.custom422()
    return exception.custom405()


