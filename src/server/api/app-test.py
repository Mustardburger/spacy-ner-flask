import requests
import spacy
from spacy.tokens import Span
from spacy import displacy
from collections import Counter
import en_core_web_sm
import json

class NER:

    def __init__(self):
        self.nlp = en_core_web_sm.load()

    def predict(self, text):
        doc = self.nlp(text)
        d = []

        for ent in doc.ents:
            d.append({
                "text": ent.text, "start": ent.start_char, "end": ent.end_char, "label": ent.label_
            })

        return d


if __name__ == "__main__":

    # stop
    model = NER()
    test_case = "Phuc is an undergraduate student currently working at Washington University in St. Louis"
    prediction = json.dumps(model.predict(test_case))
    print(prediction)
    res = requests.post("http://127.0.0.1:5000/predict",
                        data=prediction)
    
    print("POST request submitted")