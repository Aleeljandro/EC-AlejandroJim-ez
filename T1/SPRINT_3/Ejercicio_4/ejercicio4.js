const API_URL = "http://localhost:3000";
document.getElementById('partyForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const partySize = document.getElementById('partySize').value;
    const creatorId = document.getElementById('creatorId').value;
    const levelCap = parseInt(document.getElementById('levelCap').value);
    const itemLevelCap = parseInt(document.getElementById('itemLevelCap').value);
    const partyRole = document.getElementById('partyRole').value;
    const plannedStart = document.getElementById('plannedStart').value;

    // Validaciones
    const currentDate = new Date();
    const plannedDate = new Date(plannedStart.split('_')[0].split('/').reverse().join('-') + 'T' + plannedStart.split('_')[1] + ':00');

    if (!partySize || !creatorId || isNaN(levelCap) || isNaN(itemLevelCap) || !partyRole || !plannedStart) {
        showMessage('Todos los campos son obligatorios.');
        return;
    }

    if (plannedDate <= currentDate) {
        showMessage('La fecha y hora deben ser futuras.');
        return;
    }

    if (levelCap <= 0 || itemLevelCap <= 0) {
        showMessage('Los valores de Level Cap e ILevel Cap deben ser positivos.');
        return;
    }

    // Solicitud a la API
    try {
        const response = await fetch('partyfinder/partySize', { // Reemplaza con la URL real de la API
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                partySize,
                creatorId,
                levelCap,
                itemLevelCap,
                partyRole,
                plannedStart
            })
        });

        if (response.ok) {
            showMessage('Party creada exitosamente.');
            // Aquí podrías actualizar la interfaz para mostrar la nueva party
            closeModal(); // Cierra el modal después de crear la party
        } else {
            const errorText = await response.text(); // Captura el texto de error de la respuesta
            showMessage(`Error al crear la party: ${errorText}`);
        }
    } catch (error) {
        showMessage('Error de conexión a la API: ' + error.message);
    }
});

function showMessage(msg) {
    document.getElementById('message').innerText = msg;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
