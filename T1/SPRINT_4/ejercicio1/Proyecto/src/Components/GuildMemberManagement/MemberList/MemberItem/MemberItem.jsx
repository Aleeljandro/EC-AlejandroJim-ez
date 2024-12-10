import React from "react";

const MemberItem = ({ member }) => {
    // Validación de datos
    if (!member) {
        return <div>No member data available</div>;
    }

    // Accede a las propiedades de manera segura
    const { username, email } = member;

    return (
        <div className="member-item">
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default MemberItem;
