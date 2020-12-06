import configparser

cfg = configparser.ConfigParser()
cfg.read('/app/environment.ini')

#========================================================================
#                             PROJECT INFORMATION 
#========================================================================
VERISON = cfg['project']['version']
PROJECT_NAME = cfg['project']['name']
ENVIRONMENT = cfg['project']['environment']
DEBUG = cfg['project'].getboolean('debug', False)
SECRET_KEY = cfg['project']['serect_key']


#=========================================================================
#                          AUTHENTICATE INFORMATION 
#=========================================================================
ENCODE_TYPE = cfg['authenticate']['encode']
DIGEST = cfg['authenticate']['digest']    
ALGORITHM = cfg['authenticate']['algorithm']
ROUNDS = cfg['authenticate'].getint('rounds')
SALT_SIZE = cfg['authenticate'].getint('salt_size')
SALT = bytes(cfg['authenticate']['salt'], "utf-8").decode('unicode_escape')
ACCESS_TOKEN_EXPIRE_MINUTES = cfg['authenticate']['access_expire']
FRESH_TOKEN_EXPIRE_MINUTES = cfg['authenticate']['fresh_expire']  


#=========================================================================
#                            DATABASE INFORMATION 
#=========================================================================
SQLALCHEMY_DATABASE_URI = "{type}://{user}:{pw}@{host}:{port}/{db}".format(
    type=cfg['database']['type'],
    user=cfg['database']['user'],
    pw=cfg['database']['password'],
    host=cfg['database']['host'],
    port=cfg['database']['port'],
    db=cfg['database']['db_name']
) 