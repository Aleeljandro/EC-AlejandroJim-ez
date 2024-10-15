document.getElementById('iniciar').addEventListener('click', function () {
    const inputTiempo = document.getElementById('tiempo');
    let tiempoRestante = parseInt(inputTiempo.value);

 
    if (isNaN(tiempoRestante) || tiempoRestante <= 0) {
        alert('Dame un número válido de segundos.');
        return;
    }

    const mostrarTiempo = document.getElementById('restante');
    mostrarTiempo.textContent = `Tiempo restante: ${tiempoRestante} segundos`;

    
    const intervalo = setInterval(() => {
        tiempoRestante--;

        if (tiempoRestante >= 0) {
            mostrarTiempo.textContent = `Tiempo restante: ${tiempoRestante} segundos`;
        } else {
            clearInterval(intervalo);
            mostrarTiempo.textContent = "¡Se acabó el tiempo!";
        }
    }, 1000);
});