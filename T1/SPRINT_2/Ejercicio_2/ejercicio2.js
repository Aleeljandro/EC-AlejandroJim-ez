document.getElementById('calcular').addEventListener('click', function () {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacion = document.getElementById('operacion').value;
    let resultado;

    // Validación básica de los campos de entrada
    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Ingresa ambos números.');
        return;
    }

    // Realizar la operación seleccionada
    switch (operacion) {
        case 'suma':
            resultado = numero1 + numero2;
            break;
        case 'resta':
            resultado = numero1 - numero2;
            break;
        case 'multiplicacion':
            resultado = numero1 * numero2;
            break;
        case 'division':
            if (numero2 === 0) {
                alert('No se puede dividir por cero.');
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            alert('Esto no vale, aplícate.');
            return;
    }

    // Mostrar el resultado
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});
