# from passlib.hash import pbkdf2_sha256

def verify_password(password, hash_password):
    # if pbkdf2_sha256.verify(password, hash_password):
    #     return True
    return False

def decrypt_jwt(token):
    return {
        "id": 1,
        "role": "king"
    }
