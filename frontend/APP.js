document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('prediction-form');
    const resultDiv = document.getElementById('prediction-result').getElementsByTagName('p')[0];


    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};

        for (let [key, value] of formData.entries()) {
            const numValue = parseFloat(value);
            if (isNaN(numValue)) {
                resultDiv.textContent = `Erro: Por favor, insira um valor numérico válido para ${key}.`;
                return;
            }
            data[key] = numValue;
        }

        resultDiv.textContent = 'Prevendo...';

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
            return response.json();
        })
        .then(predictionData => {
            resultDiv.textContent = `Qualidade do Ar Prevista: ${predictionData.prediction}`;
        })
        .catch(error => {
            console.error('Erro:', error);
            resultDiv.textContent = `Erro ao obter previsão: ${error.message}. Verifique o console para mais detalhes.`;
        });
    });
});
