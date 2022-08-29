from flask_cors import CORS
from flask import Flask, request, jsonify
import json
from .model import NER

# Flask App & CORS policy
app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

# NER model
model = NER()


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/predict", methods=["POST"])
def predict():
    if request.method == "POST":
        input_text = request.data.decode("utf-8")[1:-1]
        result = model.predict(input_text)
        print(result)
        return jsonify({"result": result})


@app.route("/predict-pretty", methods=["POST"])
def predict_pretty():
    if request.method == "POST":
        data = request.get_json()
        input_text = data["input_text"]
        print(data)
        result = model.predict_pretty(input_text)
        print(result)
        return {"result": result}


"""
How to run:

flask --app main run

"""

if __name__ == "__main__":
    app.run(debug=True)
