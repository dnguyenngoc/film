from flask_sqlalchemy import SQLAlchemy

from app.settings import config
from app.database.base import Base
from app.database.sqlalchemy_mysql import db_session as db

db_session = db.session
