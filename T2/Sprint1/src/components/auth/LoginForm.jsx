import React, { useState } from "react";
import "./authStyles.css"; // Asegúrate de tener los estilos importados correctamente

const LoginForm = ({ onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      alert(`Inicio de sesión exitoso con el correo: ${email}`);
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <div className="container">
      <form id="login-form" onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>
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
        <button type="submit">Entrar</button>
        <a href="#" onClick={onForgotPassword}>
          He olvidado mi contraseña
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
