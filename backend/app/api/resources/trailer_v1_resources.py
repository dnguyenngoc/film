from flask import Blueprint
from flask import jsonify
from flask import request, Response
from utils import ( 
    exception, _response
)
from security.wraps import token_required
import os

router = Blueprint('trailer_v1_resources', __name__)


def get_chunk(byte1=None, byte2=None):
    full_path = "./Gravity - 2K Trailer.mp4"
    file_size = os.stat(full_path).st_size
    start = 0
    length = 102400

    if byte1 < file_size:
        start = byte1
    if byte2:
        length = byte2 + 1 - byte1
    else:
        length = file_size - start

    with open(full_path, 'rb') as f:
        f.seek(start)
        chunk = f.read(length)
    return chunk, start, length, file_size

@router.route('/api/v1/trailer2', methods = ['GET'])
def get_file():
    range_header = request.headers.get('Range', None)
    byte1, byte2 = 0, None
    if range_header:
        match = re.search(r'(\d+)-(\d*)', range_header)
        groups = match.groups()

        if groups[0]:
            byte1 = int(groups[0])
        if groups[1]:
            byte2 = int(groups[1])

    chunk, start, length, file_size = get_chunk(byte1, byte2)
    resp = Response(chunk, 206, mimetype='video/mp4',
                      content_type='video/mp4', direct_passthrough=True)
    resp.headers.add('Content-Range', 'bytes {0}-{1}/{2}'.format(start, start + length - 1, file_size))
    return resp

@router.route('/api/v1/trailer', methods = ["GET"])
def fetch_phimle():
    if request.method == "GET":
        return 'http://localhost:8080/api/v1/trailer2'
    return exception.custom405()




