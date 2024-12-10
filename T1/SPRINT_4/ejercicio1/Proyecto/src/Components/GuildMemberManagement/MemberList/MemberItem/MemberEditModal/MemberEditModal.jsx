import React from "react";

const MemberEditModal = ({ member, onSave, onClose }) => (
    <div className="member-edit-modal">
        <h2>Editar {member.username}</h2>
        {/* Formulario de edición */}
        <button onClick={onSave}>Guardar</button>
        <button onClick={onClose}>Cancelar</button>
    </div>
);

export default MemberEditModal;
