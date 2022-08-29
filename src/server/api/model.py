import spacy
from spacy.tokens import Span
from spacy import displacy
from collections import Counter
import en_core_web_sm
import pprint

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