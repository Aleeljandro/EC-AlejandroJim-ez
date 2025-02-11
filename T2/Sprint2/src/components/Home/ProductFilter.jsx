import React, { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import "../../styles/products.css";

const ProductFilter = ({ products, onFilter }) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState("");
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);

    useEffect(() => {
        if (products.length > 0) {
            const prices = products.map(product => parseFloat(product.price.replace("€", "")));
            const min = Math.min(...prices);
            const max = Math.max(...prices);
            setMinPrice(min);
            setMaxPrice(max);
            setPriceRange([min, max]);
        }
    }, [products]);

    useEffect(() => {
        setPriceRange([Math.max(minPrice, priceRange[0]), Math.min(maxPrice, priceRange[1])]);
    }, [minPrice, maxPrice]);

    const handleFilter = () => {
        const filteredProducts = products.filter(product => {
            const productPrice = parseFloat(product.price.replace("€", ""));
            const matchesName = name.trim() === "" || (product.name && product.name.toLowerCase().includes(name.toLowerCase().trim()));
            const matchesCategory = category === "" || product.category === category;
            const matchesRating = rating === "" || product.rating >= parseFloat(rating);
            const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];

            return matchesName && matchesCategory && matchesRating && matchesPrice;
        });

        onFilter(filteredProducts);
    };

    const handleClear = () => {
        setName("");
        setCategory("");
        setRating("");
        setPriceRange([minPrice, maxPrice]);
        onFilter(products);
    };

    return (
        <div className="product-filter">
            <input
                type="text"
                placeholder="Nombre del producto"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Todas las categorías</option>
                <option value="sillas">Gorros</option>
                <option value="bolsos">Bolsos</option>
                <option value="talegas">Sábanas</option>
            </select>

            <select value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="">Todas las valoraciones</option>
                <option value="4">4 estrellas o más</option>
                <option value="3">3 estrellas o más</option>
                <option value="2">2 estrellas o más</option>
            </select>

            <div className="slider-container">
                <label>Rango de precios:</label>
                <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange}
                    onChange={(value) => setPriceRange(value)}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}€</div>}
                />
            </div>

            <button onClick={handleFilter}>Filtrar</button>
            <button onClick={handleClear}>Limpiar</button>
        </div>
    );
};

export default ProductFilter;
