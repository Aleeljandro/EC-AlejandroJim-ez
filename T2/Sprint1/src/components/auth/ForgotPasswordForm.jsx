import React, { useState } from "react";
import "./authStyles.css"; // Asegúrate de tener los estilos importados correctamente

const ForgotPasswordForm = ({ onClose }) => {
  const [email, setEmail] = useState("");

  const handleRecoverPassword = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Se ha enviado un correo a ${email} con instrucciones para recuperar tu contraseña.`);
      setEmail("");
      onClose();
    } else {
      alert("Por favor, introduce un correo electrónico válido.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Recuperar Contraseña</h2>
        <p>Introduce tu correo electrónico para recibir una nueva contraseña:</p>
        <form onSubmit={handleRecoverPassword}>
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
