import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FavoritesProvider } from "./services/favoritesContext"; // 🔹 Importación correcta

import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/NavBar";
import Herosection from "./components/Home/HeroSection";
import ContentList from "./components/Home/ProductList";
import ProductFilter from "./components/Home/ProductFilter";
import CartPage from "./components/Home/CartPage";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import ForgotPasswordForm from "./components/Auth/ForgotPasswordForm";
import FavoritesPage from "./components/Home/FavoritesPage"; // 🔹 Importar la página de favoritos
import { fetchProducts } from "./services/product_API";

const NotFound = () => <h2>404 Not Found</h2>;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((products) => {
      setProducts(products);
      setFilteredProducts(products);
    });
  }, []);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleFilter = ({ name, minPrice, maxPrice }) => {
    const filtered = products.filter((product) => {
      const matchesName = product.name.toLowerCase().includes(name.toLowerCase());
      const price = parseFloat(product.price.replace("€", ""));
      const matchesMinPrice = minPrice === "" || price >= parseFloat(minPrice);
      const matchesMaxPrice = maxPrice === "" || price <= parseFloat(maxPrice);
      return matchesName && matchesMinPrice && matchesMaxPrice;
    });
    setFilteredProducts(filtered);
  };

  return (
    <FavoritesProvider> {/* 🔹 Ahora está bien definido */}
      <Router>
        <div>
          <header>
            <Header cartItems={cartItems} />
          </header>

          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Herosection />
                    <ProductFilter products={products} onFilter={handleFilter} />
                    <ContentList products={filteredProducts} onAddToCart={handleAddToCart} />
                  </>
                }
              />
              {/* 🔹 Corrección: Pasar setCartItems a CartPage */}
              <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/forgot-password" element={<ForgotPasswordForm />} />
              <Route path="/favorites" element={<FavoritesPage />} /> {/* 🔹 Nueva ruta */}
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
