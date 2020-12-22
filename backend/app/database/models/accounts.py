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
    role = Column(Integer, ForeignKey('roles.id'), index=True, nullable=True, default=1)
    created_by = Column(String(255), nullable=False)
    created_date = Column(DateTime, nullable=False)
    updated_by = Column(String(255), nullable=True, default=None)
    updated_date = Column(DateTime, nullable=True, default=None)


class Role(Base):
    __tablename__ = "roles"
    id = Column(Integer,  primary_key=True, index=True)
    role_name = Column(String(50), unique=True, nullable=False)
    avatar = Column(String(700), nullable=True)
    description = Column(String(500), nullable=True)
    active = Column(Boolean, nullable=False, default=True)
    created_by = Column(String(255), nullable=False)
    created_date = Column(DateTime, nullable=False)
    updated_by = Column(String(255), nullable=True, default=None)
    updated_date = Column(DateTime, nullable=True, default=None)