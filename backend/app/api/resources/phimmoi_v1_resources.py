from flask import Blueprint
from flask import jsonify
from flask import request
from utils import ( 
    exception, _response
)
from security.wraps import token_required
from api.entities import phim_request as request_entities
from api.entities import phim_response as response_entities


from api.controllers import phimmoi_controllers as control


router = Blueprint('phimmoi_v1_resources', __name__)

# @router.route('/api/v1/phimmoi', methods = ["GET"])
# def fetch_by_name():
#     if request.method == "GET":
#         name = request.query_string
#         # if _res.FetchByName(form).validate():
#         return control.fetch_by_name(name)
#         # return exception.custom422()

#     return exception.custom405()


@router.route('/api/v1/phimmoi/phim-le/<int:page>', methods = ["GET"])
def fetch_phimle(page):
    if request.method == "GET":
        if request_entities.page_validates(page):
            return control.fetch_phim_le(page)
        return exception.custom422()
    return exception.custom405()




