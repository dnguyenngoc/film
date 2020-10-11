import mysql.connector
from app.settings import config

mydb = mysql.connector.connect(
  host=config.MYSQL_SERVER,
  user=config.MYSQL_USER,
  host=config.MYSQL_PASSWORD,
  database=config.MYSQL_DB
)