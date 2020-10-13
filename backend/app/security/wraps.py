from security import (
    decrypt, encrypt
)
from utils import exception
from api.repositories import account_repo
from api.entities.account_responses import LoginResponse
from functools import wraps
from __main__ import app
from flask import request

# Setup the Flask-JWT-Extended extension
def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        token = None
        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']
        if not token:
            return exception.custom401()
        try:
            data = decrypt.decrypt_jwt(token)
            user = account_repo.get_by_id(data['id'])
            if not user:
                return exception.custom403()
            return f(user, *args, **kwargs)
        except:
            return exception.custom403()
    return decorator

    