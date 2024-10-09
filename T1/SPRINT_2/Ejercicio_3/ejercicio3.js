
// Función para añadir el contenido del input a la lista
function añadirALista() {
    const input = document.getElementById('itemInput').value;

    if (input !== "") {
        const lista = document.getElementById('lista');
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = input;

        lista.appendChild(nuevoItem);
        document.getElementById('itemInput').value = ""; // Limpiar el campo
    }
}

// Evento de clic en el botón para añadir a la lista
document.getElementById('addButton').addEventListener('click', añadirALista);
