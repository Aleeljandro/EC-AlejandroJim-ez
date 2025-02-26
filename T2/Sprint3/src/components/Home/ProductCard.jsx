import React, { useContext } from "react";
import { FavoritesContext } from "../../services/favoritesContext";

const ProductCard = ({ product, onAddToCart }) => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);
    const isFavorite = favorites.some((fav) => fav.id === product.id);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => onAddToCart(product)}>Comprar</button>
            <button onClick={(e) => {
                e.stopPropagation(); // 🔹 Evita eventos innecesarios
                toggleFavorite(product);
            }}>
                {isFavorite ? "❤️ Quitar" : "🤍 Añadir"}
            </button>
        </div>
    );
};

export default ProductCard;
