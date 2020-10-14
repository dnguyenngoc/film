from api.repositories import account_repo as rp
from security import (
    decrypt, encrypt
)
from utils import (
    exception, _response
)
from api.entities import account_responses as _res


def login(email, password):
# -------------------------------------------------------------------------------------------------
# login create token
# -------------------------------------------------------------------------------------------------
    user = rp.get_by_email(email)
    if not user:
        return exception.custom404()
    if decrypt.verify_password(password, user.hash_password) == False:
        return exception.custom422()
    data = dict(id=user.id, role=user.role.role_name)
    return _res.LoginResponse(
        encrypt.create_access_token(data),
        encrypt.create_fresh_token(data)
    ).json()

def fresh_token(user):
# -------------------------------------------------------------------------------------------------
# login fresh token
# -------------------------------------------------------------------------------------------------
    return password


def register(email, password, avatar=None):
# -------------------------------------------------------------------------------------------------
# register
# -------------------------------------------------------------------------------------------------
    return password