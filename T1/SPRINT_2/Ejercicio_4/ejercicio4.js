let segundos = 0;
let minutos = 0;
let intervalo;

// Función para actualizar el tiempo en pantalla
function actualizarPantalla() {
    const tiempo = document.getElementById('tiempo');
    const formatoMinutos = minutos < 10 ? `0${minutos}` : minutos;
    const formatoSegundos = segundos < 10 ? `0${segundos}` : segundos;
    tiempo.textContent = `${formatoMinutos}:${formatoSegundos}`;
}

// Función que ejecuta el cronómetro cada segundo
function iniciarCronometro() {
    intervalo = setInterval(() => {
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }
        actualizarPantalla();
    }, 1000);
}

// Detectar click en "Iniciar"
document.getElementById('iniciar').addEventListener('click', function () {
    if (!intervalo) {
        iniciarCronometro();
    }
});

// Detectar click en "Pausar"
document.getElementById('pausar').addEventListener('click', function () {
    clearInterval(intervalo);
    intervalo = null; // Evitar múltiples inicios
});

// Detectar click en "Reiniciar"
document.getElementById('reiniciar').addEventListener('click', function () {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    minutos = 0;
    actualizarPantalla();
});
