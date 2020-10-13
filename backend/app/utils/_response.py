from flask import jsonify
from __main__ import app
from settings import messages


def complete(*args):
    return jsonify({"msg": messages.COMPLETE}), 200