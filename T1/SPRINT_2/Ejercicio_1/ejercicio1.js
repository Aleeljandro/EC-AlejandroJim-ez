
// Función para generar un color aleatorio
function generarColorAleatorio() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Evento de clic en el botón para cambiar el color de fondo
document.getElementById('colorButton').addEventListener('click', function() {
    const nuevoColor = generarColorAleatorio();
    document.body.style.backgroundColor = nuevoColor;
});
