import React, { useState } from "react";
import ProductCard from './ProductCard';
import '../../styles/products.css';

const ContentList = ({ products, onAddToCart }) => {
    const [filteredColor, setFilteredColor] = useState("");

    const handleFilterChange = (e) => {
        setFilteredColor(e.target.value);
    };

    const filteredProducts = filteredColor
        ? products.filter(product => product.color === filteredColor)
        : products;

    return (
        <div>
            <select onChange={handleFilterChange} value={filteredColor}>
                <option value="">Todos los colores</option>
                <option value="gris">Gris</option>
                <option value="azul">Azul</option>
                <option value="beige">Beige</option>
            </select>
            <div className="content-list">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
            </div>
        </div>
    );
};

export default ContentList;
