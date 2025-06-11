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
                resultDiv.textContent = `Error: Please enter a valid numeric value for ${key}.`;
                return;
            }
            data[key] = numValue;
        }

        resultDiv.textContent = 'Predicting...';

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
            resultDiv.textContent = `Predicted Air Quality: ${predictionData.prediction}`;
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.textContent = `Error fetching prediction: ${error.message}. Check console for details.`;
        });
    });
});
