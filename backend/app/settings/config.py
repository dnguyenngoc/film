import os

def getenv_boolean(var_name, default_value=False):
    result = default_value
    env_value = os.getenv(var_name)
    if env_value is not None:
        result = env_value.upper() in ("TRUE", "1")
    return result

PROJECT_NAME = os.getenv("PROJECT_NAME")
API_V1_STR = "/api/v1"


######################################### TOKEN CONFIG ###############################################
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 2
FRESH_TOKEN_EXPIRE_MINUTES = 60 * 24 * 8
SECRET_KEY = os.getenv("SECRET_KEY")
if not SECRET_KEY:
    SECRET_KEY = os.urandom(32)

######################################### MYSQL DATABASE #############################################
MYSQL_SERVER = os.getenv("MYSQL_SERVER")
MYSQL_USER = os.getenv("MYSQL_USER")
MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD")
MYSQL_DATABASE = os.getenv("MYSQL_DATABASE")
SQLALCHEMY_DATABASE_URI_MYSQL = (f"mysql+pymysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_SERVER}/{MYSQL_DATABASE}")
