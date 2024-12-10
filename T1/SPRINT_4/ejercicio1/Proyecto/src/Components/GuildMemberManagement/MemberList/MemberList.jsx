import React, { useEffect, useState } from "react";
import { getAllMembers } from '../../../Services/MemberService';




const MemberList = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        // Obtener miembros de la API
        const fetchMembers = async () => {
            try {
                const data = await getAllMembers();
                setMembers(data);
            } catch (error) {
                console.error("Error fetching members:", error);
            }
        };

        fetchMembers();
    }, []);

    return (
        <div>
            <h1>Miembros</h1>
            <ul>
                {members.map((member) => (
                    <li key={member._id}>
                        {member.username} - {member.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MemberList;
