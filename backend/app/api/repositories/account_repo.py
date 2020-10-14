from database.models.accounts import Account
from database.db import db_session
from sqlalchemy.orm import joinedload

def get_by_email(email):
    return db_session.query(Account).options(joinedload(Account.role)).filter(
        Account.email==email, 
        Account.active==True,
        ).first()