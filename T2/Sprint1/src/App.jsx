import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import ForgotPasswordForm from "./components/auth/ForgotPasswordForm";
import ProductFilter from './components/home/ProductFilter';
import ContentList from './components/home/ContentList';
import CartPreview from './components/home/CartPreview';
import "./styles/styles.css"; // Asegúrate de tener los estilos importados correctamente

const App = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const products = [];  // Reemplazar con datos reales
  const cartItems = [];  // Reemplazar con datos reales

  const closeModals = () => {
    setShowAuthModal(false);
    setShowRegisterForm(false);
    setShowForgotPassword(false);
  };

  return (
    <Router>
      <div>
        {/* Barra de navegación */}
        <Navbar />

        {/* Botón de Login en la esquina superior derecha */}
        <button
          className="login-button"
          onClick={() => setShowAuthModal(true)}
        >
          Iniciar Sesión
        </button>

        {/* Modal de Autenticación */}
        {showAuthModal && (
          <LoginForm
            onClose={closeModals}
            onForgotPassword={() => {
              setShowAuthModal(false);
              setShowForgotPassword(true);
            }}
            onRegister={() => {
              setShowAuthModal(false);
              setShowRegisterForm(true);
            }}
          />
        )}

        {/* Modal de Registro */}
        {showRegisterForm && (
          <RegisterForm
            onClose={closeModals}
            onLogin={() => {
              setShowRegisterForm(false);
              setShowAuthModal(true);
            }}
          />
        )}

        {/* Modal de Olvido de Contraseña */}
        {showForgotPassword && (
          <ForgotPasswordForm
            onClose={closeModals}
            onLogin={() => {
              setShowForgotPassword(false);
              setShowAuthModal(true);
            }}
          />
        )}

        {/* Rutas */}
        <Switch>
          <Route exact path="/">
            {/* Filtro de Productos */}
            <ProductFilter />

            {/* Lista de Productos */}
            <ContentList products={products} /> {/* Pasar la prop products */}

            {/* Vista previa del carrito */}
            <CartPreview cartItems={cartItems} /> {/* Pasar la prop cartItems */}
          </Route>
          {/* Otras rutas */}
        </Switch>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
