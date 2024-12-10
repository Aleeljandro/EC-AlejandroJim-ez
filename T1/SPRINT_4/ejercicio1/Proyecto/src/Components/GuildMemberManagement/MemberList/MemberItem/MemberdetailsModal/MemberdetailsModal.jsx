import React from "react";

const MemberDetailsModal = ({ member, onClose }) => (
    <div className="member-details-modal">
        <h2>Detalles de {member.username}</h2>
        <button onClick={onClose}>Cerrar</button>
    </div>
);

export default MemberDetailsModal;
