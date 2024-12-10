const API_BASE_URL = "http://localhost:3000/guildmembers";

// Función para obtener los miembros
export const fetchMembers = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error("Error al obtener los miembros.");
    return await response.json();
  } catch (error) {
    console.error("Error fetching members:", error);
    throw error;
  }
};

// Función para eliminar un miembro
export const deleteMember = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error(`Error al eliminar el miembro con ID ${id}`);
  } catch (error) {
    console.error("Error deleting member:", error);
    throw error;
  }
};

// Función para eliminar varios miembros
export const deleteMembers = async (ids) => {
  try {
    for (const id of ids) {
      await deleteMember(id);
    }
  } catch (error) {
    console.error("Error deleting multiple members:", error);
    throw error;
  }
};

// Función para agregar un miembro
export const addMember = async (memberData) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST", // Usamos POST para agregar un nuevo miembro
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(memberData), // Enviamos los datos del nuevo miembro
    });

    if (!response.ok) throw new Error("Error al agregar el miembro");

    // Retornamos los datos del nuevo miembro creado
    return await response.json();
  } catch (error) {
    console.error("Error adding member:", error);
    throw error;
  }
};

// Función para actualizar un miembro
export const updateMember = async (id, memberData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT", // Usamos PUT para actualizar el recurso
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(memberData), // Enviamos los datos del miembro que queremos actualizar
    });

    if (!response.ok) throw new Error(`Error al actualizar el miembro con ID ${id}`);

    // Retornamos los datos actualizados del miembro
    return await response.json();
  } catch (error) {
    console.error("Error updating member:", error);
    throw error;
  }
};
