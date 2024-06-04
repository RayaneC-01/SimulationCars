document.addEventListener('DOMContentLoaded', () => {
    const modelSelect = document.getElementById('car-model');
    const colorInput = document.getElementById('car-color');
    const wheelsSelect = document.getElementById('car-wheels');
    const showSummaryButton = document.getElementById('show-summary');
    const summarySection = document.getElementById('summary');
    const configuratorSection = document.getElementById('configurator');
    const summaryContent = document.getElementById('summary-content');
    const modifyConfigButton = document.getElementById('modify-config');
    const carImage = document.getElementById('car-image');

    function updateCarImage() {
        const model = modelSelect.value;
        const wheels = wheelsSelect.value;

        carImage.src = `images/${model}_${wheels}.png`;
    }

    modelSelect.addEventListener('change', updateCarImage);
    wheelsSelect.addEventListener('change', updateCarImage);

    showSummaryButton.addEventListener('click', () => {
        const model = modelSelect.value;
        const color = colorInput.value;
        const wheels = wheelsSelect.value;

        summaryContent.innerHTML = `
            <p>Modèle: ${model}</p>
            <p>Couleur: <span style="background-color: ${color}; padding: 0 1rem;">${color}</span></p>
            <p>Jantes: ${wheels}</p>
        `;

        configuratorSection.style.display = 'none';
        summarySection.style.display = 'block';
    });

    modifyConfigButton.addEventListener('click', () => {
        summarySection.style.display = 'none';
        configuratorSection.style.display = 'block';
    });
});
