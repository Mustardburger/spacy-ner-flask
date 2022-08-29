from flask import Flask, request, jsonify
import json
from flask_cors import CORS

from model import NER

app = Flask(__name__)
obj = None
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/predict', methods=["POST", "GET"])
def predict():
    model = NER()
    if request.method == "POST":
        global obj
        obj = request.data.decode("utf-8")[1:-1]
        result = model.predict(obj)
        print(result)
        return jsonify({"result": result})
    if request.method == "GET":
        return obj


if __name__ == "__main__":
    app.run(debug=True)