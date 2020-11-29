# Need change environment.SQLALCHEMY_DATABASE_URI to uri database
from logging.config import fileConfig
from sqlalchemy import engine_from_config
from sqlalchemy import pool


from alembic import context
from settings import config as environments


# DB models base model and model folder 
from database.models import accounts
from database.base_class import Base


config = context.config
config.set_main_option("sqlalchemy.url", environments.SQLALCHEMY_DATABASE_URI)

fileConfig(config.config_file_name)


# Exceute db models
target_metadata = Base.metadata


def run_migrations_offline():
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )
    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online():
    connectable = engine_from_config(
        config.get_section(config.config_ini_section),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )
    with connectable.connect() as connection:
        context.configure(
            connection=connection, target_metadata=target_metadata
        )
        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
