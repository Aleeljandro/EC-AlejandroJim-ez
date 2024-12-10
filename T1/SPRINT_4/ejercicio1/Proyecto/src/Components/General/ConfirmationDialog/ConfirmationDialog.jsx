import React from "react";

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => (
    <div className="confirmation-dialog">
        <p>{message}</p>
        <button onClick={onConfirm}>Confirmar</button>
        <button onClick={onCancel}>Cancelar</button>
    </div>
);

export default ConfirmationDialog;
