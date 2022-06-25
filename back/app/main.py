from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from datetime import datetime
app = Flask(__name__)
cors = CORS(app)

@app.route("/healthy")
def healthy():
    return jsonify({
        "status":"OK"
    })

@app.route("/get-hour")
@cross_origin()
def hello_world():
    date_and_time = datetime.now()

    return jsonify({
        "hour":str(date_and_time.hour),
        "minutes":str(date_and_time.minute)
    })

if __name__ == "__main__":
    app.run(host = "0.0.0.0", port = 5676)