from settings import config
from datetime import (
    datetime, timedelta
)
from Crypto.Cipher import AES
from passlib.utils.pbkdf2 import pbkdf2_hmac
import binascii
from jose import JWTError, jwt

secrect = config.SECRET_KEY.encode(config.ENCODE_TYPE)
algorithm=config.ALGORITHM
salt = config.SALT  
digest = config.DIGEST
rounds = config.ROUNDS
secret_key = pbkdf2_hmac(digest, secrect, salt, rounds)


def create_access_token(data):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=config.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, config.SECRET_KEY, algorithm=algorithm)
    return encrypt(encoded_jwt)

def create_fresh_token(data):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=config.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, config.SECRET_KEY, algorithm=algorithm)
    return encrypt(encoded_jwt)

def encrypt(msg):
    ase_ciper = AES.new(secret_key, AES.MODE_GCM)
    cipher_text, auth_tag = ase_ciper.encrypt_and_digest(msg.encode(config.ENCODE_TYPE))
    end = binascii.hexlify(cipher_text + auth_tag + ase_ciper.nonce).decode(config.ENCODE_TYPE)
    return end
