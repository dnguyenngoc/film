from flask import Blueprint
from flask import jsonify
from flask import request
from flask import render_template

router = Blueprint('test', __name__)

############################ TEST API Implementation ###########################
@router.route('/', methods = ["GET"])
def home():
    return render_template('home.html')
