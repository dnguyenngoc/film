# Import Library
from flask import Blueprint
from flask import jsonify
from flask import request
from utils import ( 
    exception, _response
)
from api.entities import account_requests as _res
from api.controllers import account_controllers as control
from security.wraps import token_required


router = Blueprint('accounts', __name__)

###################################### ACCOUNTS API #########################################
@router.route('/accounts/login', methods = ["POST"])
def login():
    if request.method == "POST":
        form = request.form
        if _res.LoginRequestForm(form).validate():
            return control.login(form.get("email"), form.get("password"))
        return exception.custom422()
    return exception.custom405()


# -------------------------------------------------------------------------------------------
@router.route('/accounts/fresh-token', methods = ["POST"])
@token_required
def fresh_token(user):
    if request.method == "POST":
        form = request.form
        if _res.FreshTokenRequestForm(form).validate():
            return control.fresh_token(user)
        return exception.custom422()
    return exception.custom422()

# -------------------------------------------------------------------------------------------
@router.route('/accounts/register', methods = ["POST"])
def register():
    if request.method == "POST":
        form = request.form
        if _res.RegistrationRequestForm(form).validate():
            return control.register(form.)
        return exception.custom422()
    return exception.custom422()
