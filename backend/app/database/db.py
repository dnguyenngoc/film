from flask_sqlalchemy import SQLAlchemy

from app.main import app
from app.settings import config
from app.database.base import Base

app.config["SQLALCHEMY_DATABASE_URI"] = config.SQLALCHEMY_DATABASE_URI_MYSQL
db = SQLAlchemy(app, model_class=Base)
db_session = db.session

# db session
@app.teardown_appcontext
def shutdown_db_session(exception=None):
    db_session.remove()