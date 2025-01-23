import React from 'react';
import '../../styles/styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">BabyClothes</div>
      <ul className="navbar-menu">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#categories">Categorías</a></li>
        <li><a href="#offers">Ofertas</a></li>
      </ul>
      <div className="navbar-cart">
        <a href="#cart">🛒 Carrito (0)</a>
      </div>
    </nav>
  );
};

export default Navbar;
