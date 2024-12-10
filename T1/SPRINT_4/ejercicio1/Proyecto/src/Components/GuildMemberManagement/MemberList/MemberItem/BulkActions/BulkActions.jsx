import React from "react";

const BulkActions = ({ selectedMembers, onSendMessage, onChangeRole, onDelete }) => (
    <div className="bulk-actions">
        <button onClick={onSendMessage}>Enviar Mensaje</button>
        <button onClick={onChangeRole}>Cambiar Rol</button>
        <button onClick={onDelete}>Eliminar Miembros</button>
    </div>
);

export default BulkActions;
