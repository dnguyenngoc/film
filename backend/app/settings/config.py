import os

def getenv_boolean(var_name, default_value=False):
    result = default_value
    env_value = os.getenv(var_name)
    if env_value is not None:
        result = env_value.upper() in ("TRUE", "1")
    return result

######################################### TOKEN CONFIG ###############################################
PROJECT_NAME = os.getenv("PROJECT_NAME")
API_V1_STR = "/api/v1"


######################################### TOKEN CONFIG ###############################################
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 2
FRESH_TOKEN_EXPIRE_MINUTES = 60 * 24 * 8
SECRET_KEY = os.getenv("SECRET_KEY")
if not SECRET_KEY:
    SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ENCODE_TYPE = "utf-8"    
ALGORITHM = "HS256"
ROUNDS = 1994
DIGEST = 'sha256'
SALT_SIZE = 16
SALT = os.urandom(SALT_SIZE)
# SALT = b'5\xe0v?\x17s\xdd:`Z\xbc\xb5\x85\xb43;'


######################################### MYSQL DATABASE #############################################
MYSQL_SERVER = os.getenv("MYSQL_SERVER")
MYSQL_USER = os.getenv("MYSQL_USER")
MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD")
MYSQL_DATABASE = os.getenv("MYSQL_DATABASE")
SQLALCHEMY_DATABASE_URI_MYSQL = (f"mysql+pymysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_SERVER}/{MYSQL_DATABASE}")
