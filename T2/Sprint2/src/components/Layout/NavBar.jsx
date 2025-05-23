import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/layout.css';
import CartPreview from '../Home/CartPreview';

const Header = ({ cartItems }) => {
  const [showCartPreview, setShowCartPreview] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img 
            src="/assets/icons/Logo.svg" 
            alt="Logo de la aplicación" 
            className="logo-image"
          />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/" className="nav-item">Inicio</Link></li>
          <li><Link to="/404" className="nav-item">Habitación Bebe-Infantil</Link></li>
          <li><Link to="/404" className="nav-item">Habitación</Link></li>
          <li><Link to="/404" className="nav-item">Proyectos</Link></li>
          <li><Link to="/404" className="nav-item">Ofertas</Link></li>
          <li><Link to="/404" className="nav-item">Contacto</Link></li>
        </ul>
      </nav>
      <div 
        className="cart-container"
        onMouseEnter={() => setShowCartPreview(true)}
        onMouseLeave={() => setShowCartPreview(false)}
      >
        <img 
          src="/assets/icons/Carrito.svg" 
          alt="Carrito de compras" 
          className="cart-icon"
        />
        {showCartPreview && <CartPreview cartItems={cartItems} setShowCartPreview={setShowCartPreview} />}
      </div>
      <button 
        className="login-button" 
        onClick={() => window.location.href = '/login'}
      >
        <img 
          src="/assets/icons/IniciarSesion.svg" 
          alt="Login" 
          className="login-icon"
        />
      </button>
    </header>
  );
};

export default Header;