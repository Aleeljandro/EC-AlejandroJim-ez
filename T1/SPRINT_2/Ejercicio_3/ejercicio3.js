// Inicializar el contador de votos
let votos = {
    rojo: 0,
    azul: 0,
    verde: 0,
    amarillo: 0
};

// Función para actualizar el gráfico de barras
function actualizarGrafico() {
    const totalVotos = votos.rojo + votos.azul + votos.verde + votos.amarillo;

    // Actualizar el ancho de las barras basadas en el porcentaje de votos
    document.getElementById('barra-rojo').style.width = (votos.rojo / totalVotos) * 100 + '%';
    document.getElementById('barra-rojo').textContent = `${votos.rojo} votos`;

    document.getElementById('barra-azul').style.width = (votos.azul / totalVotos) * 100 + '%';
    document.getElementById('barra-azul').textContent = `${votos.azul} votos`;

    document.getElementById('barra-verde').style.width = (votos.verde / totalVotos) * 100 + '%';
    document.getElementById('barra-verde').textContent = `${votos.verde} votos`;

    document.getElementById('barra-amarillo').style.width = (votos.amarillo / totalVotos) * 100 + '%';
    document.getElementById('barra-amarillo').textContent = `${votos.amarillo} votos`;
}

// Detectar el evento click en el botón "Enviar"
document.getElementById('enviar').addEventListener('click', function () {
    // Obtener el valor seleccionado
    const seleccion = document.querySelector('input[name="color"]:checked');
    
    // Verificar que se haya seleccionado una opción
    if (!seleccion) {
        alert('Por favor selecciona un color.');
        return;
    }
    
    // Incrementar el contador de votos del color seleccionado
    votos[seleccion.value]++;
    
    // Actualizar el gráfico de barras
    actualizarGrafico();
});
