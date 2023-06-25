import warnings

import pandas as pd
from flask import Flask, jsonify, request
from sklearn.tree import DecisionTreeClassifier
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

warnings.filterwarnings('ignore')
data = pd.read_csv('dataset.csv')

X = data.drop('Disorder', axis=1)
y = data['Disorder']

feature_names = X.columns.tolist()

classifier = DecisionTreeClassifier()
classifier.fit(X, y)

@app.route('/predict', methods=['POST'])
def predict():
    input_data = request.json['input_data']

    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        user_state = classifier.predict([input_data])

    return jsonify({'predicted_disorder': user_state[0]})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
