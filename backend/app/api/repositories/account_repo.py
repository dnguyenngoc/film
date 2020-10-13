from database.models.accounts import Account
from database.db import db_session

def get_by_email(email):
    return db_session.query(Account).filter(Account.email==email).first()