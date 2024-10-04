
// Función para calcular el área del rectángulo
function calcularAreaRectangulo() {
    const ancho = document.getElementById('ancho').value;
    const alto = document.getElementById('alto').value;

    if (ancho > 0 && alto > 0) {
        const area = ancho * alto;
        document.getElementById('resultado').textContent = `El área del rectángulo es: ${area}`;
    } else {
        document.getElementById('resultado').textContent = "Por favor, introduce valores válidos.";
    }
}

// Evento de clic en el botón para calcular el área
document.getElementById('calcularButton').addEventListener('click', calcularAreaRectangulo);
