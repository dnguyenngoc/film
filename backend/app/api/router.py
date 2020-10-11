from __main__ import app
from flask import Blueprint
from api.resources.test_resources import router as test_resources
from api.resources.account_resources import router as account_resources

################################### LOAD ROUTER FROM RESOURCE #################################
app.register_blueprint(test_resources)
app.register_blueprint(account_resources)