from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship
from database.base_class import Base

class Account(Base):
    __tablename__ = "accounts"
    id = Column(Integer,  primary_key=True, index=True)
    email = Column(String(255), unique=True, nullable=False)
    hash_password = Column(String(255), nullable=False)
    first_name = Column(String(255), nullable=False)
    last_name = Column(String(255), nullable=False)
    avatar = Column(String(255), nullable=True, default=None)
    active = Column(Boolean, nullable=False, default=True)
    verify = Column(Boolean, nullable=False, default=False)
    created_by = Column(String(255), nullable=False)
    created_date = Column(DateTime, nullable=False)
    updated_by = Column(String(255), nullable=True, default=None)
    updated_date = Column(DateTime, nullable=True, default=None)

