# Session connect to database
from sqlalchemy import create_engine
from settings import config
from sqlalchemy.sql import text
import logging

data = config.SQLALCHEMY_DATABASE_URI_MYSQL
engine = create_engine(data, pool_pre_ping=True, echo=True)
connection = engine.connect()
try:
    rs = connection.execute('DELETE FROM alembic_version')
except Exception as e:
     logging.warning("[Alembic] - %s", str(e))
finally:
    connection.close()
    engine.dispose()
