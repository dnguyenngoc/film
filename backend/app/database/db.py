from settings import config
from database.base import Base
from database.sqlalchemy_mysql import db_session as db
from database.mysql import mydb

db_session = db
mysql = mydb
cursor = mydb.cursor()
