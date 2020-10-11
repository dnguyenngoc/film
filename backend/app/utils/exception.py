from flask import jsonify
from __main__ import app
from settings import messages

# 400 Bad Request
@app.errorhandler(400)
def custom400():
    return jsonify({"msg": messages.BAD_REQUEST}), 400

# 401 Unauthorized
@app.errorhandler(401)
def custom401():
    return jsonify({"msg": messages.UNAUTHORIZED }), 401


# 403 Forbidden
@app.errorhandler(403)
def custom403():
    return jsonify({"msg": messages.FORBIDDEN}), 403


# 404 Not Found
@app.errorhandler(404)
def custom404():
    return jsonify({"msg": messages.NOT_FOUND}), 404


# 405 Method Not Allowed
@app.errorhandler(405)
def custom405():
    return jsonify({"msg": messages.METHOD_NOT_ALLOWED}), 405


# 406 Not Acceptable
@app.errorhandler(406)
def custom406():
    return jsonify({"msg": messages.NOT_ACCEPTABLE}), 406


# 422 Unprocessable Entity, for flask-apispec, webargs
@app.errorhandler(422)
def custom422():
    return jsonify({"msg": messages.UNPROCESSABLE_ENTITY}), 422


# 500 Internal Server Error
@app.errorhandler(500)
def custom500():
    return jsonify({"msg": messages.INTERNAL_SERVER_ERROR}), 500