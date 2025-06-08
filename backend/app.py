from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)

MODEL_PATH = 'Air_Quality.pkl'
try:
    model = joblib.load(MODEL_PATH)
    print(f"Modelo '{MODEL_PATH}' carregado com sucesso!")
except Exception as e:
    print(f"Erro ao carregar o modelo '{MODEL_PATH}': {e}")
    model = None

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({"error": "Modelo de previsão não carregado. Contate o administrador."}), 500

    try:
        data = request.get_json(force=True)

        form_to_model_column_map = {
            'temperatura': 'Temperature',
            'umidade': 'Humidity',
            'pm25': 'PM2.5',
            'so2': 'SO2',
            'no2': 'NO2',
            'pm10': 'PM10',
            'co': 'CO',
            'proximity_industrial': 'Proximity_to_Industrial_Areas',
            'population_density': 'Population_Density'
        }

        expected_model_features_order = [
            'Temperature',
            'Humidity',
            'PM2.5',
            'PM10',
            'NO2',
            'SO2',
            'CO',
            'Proximity_to_Industrial_Areas',
            'Population_Density'
        ]

        input_values_for_model = []
        for model_col_name in expected_model_features_order:
            found_key_html = None
            for html_name, dataset_name in form_to_model_column_map.items():
                if dataset_name == model_col_name:
                    found_key_html = html_name
                    break

            if found_key_html and found_key_html in data:
                input_values_for_model.append(data[found_key_html])
            else:
                return jsonify({"error": f"Dado ausente ou incorreto para a feature '{model_col_name}'. Verifique os inputs do formulário."}), 400

        features = np.array(input_values_for_model).reshape(1, -1)

        prediction_text = model.predict(features)[0]

        return jsonify({"prediction": prediction_text})

    except ValueError as ve:
        print(f"Erro de validação de dados: {ve}")
        return jsonify({"error": f"Erro de validação de dados: {ve}. Verifique se os dados são numéricos."}), 400
    except Exception as e:
        print(f"Erro na predição: {e}")
        return jsonify({"error": f"Erro interno do servidor: {e}. Consulte o console do servidor para mais detalhes."}), 500

@app.route('/')
def home():
    return "API de Previsão de Qualidade do Ar está funcionando!"

if __name__ == '__main__':
    app.run(debug=True)