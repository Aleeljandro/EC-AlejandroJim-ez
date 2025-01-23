import React, { useState } from "react";
import "./authStyles.css"; // Asegúrate de tener los estilos importados correctamente

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      alert(`Registro exitoso para ${name}. Ahora puedes iniciar sesión.`);
      setName("");
      setEmail("");
      setPassword("");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="container">
      <form id="register-form" onSubmit={handleRegister}>
        <h2>Registrarse</h2>
        <input
          type="text"
          placeholder="Nombre Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
