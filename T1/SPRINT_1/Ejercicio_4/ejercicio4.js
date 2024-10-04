// Función para aplicar el estilo al hacer hover
function aplicarHover(event) {
    event.target.style.backgroundColor = 'blue';
    event.target.style.color = 'white';
}

// Función para restaurar el estilo original al quitar hover
function quitarHover(event) {
    event.target.style.backgroundColor = 'lightgray';
    event.target.style.color = 'black';
}

// Seleccionar todos los divs y agregar eventos
document.querySelectorAll('.div-item').forEach(function(div) {
    div.addEventListener('mouseover', aplicarHover);
    div.addEventListener('mouseout', quitarHover);
});
