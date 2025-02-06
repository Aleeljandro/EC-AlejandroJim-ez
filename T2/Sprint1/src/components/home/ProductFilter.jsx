import React, { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import '../../styles/products.css';

const ProductFilter = ({ products, onFilter }) => {
    const [name, setName] = useState("");
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);

    useEffect(() => {
        if (products.length > 0) {
            const prices = products.map(product => parseFloat(product.price.replace('€', '')));
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
            const productPrice = parseFloat(product.price.replace('€', ''));
            return productPrice >= priceRange[0] && productPrice <= priceRange[1];
        });
        onFilter(filteredProducts);
    };

    const handleClear = () => {
        setName("");
        setPriceRange([minPrice, maxPrice]);
        onFilter(products);
    };

    const handleMinPriceChange = (e) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value) && value <= priceRange[1]) {
            setPriceRange([value, priceRange[1]]);
            setMinPrice(value);
        }
    };

    const handleMaxPriceChange = (e) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value) && value >= priceRange[0]) {
            setPriceRange([priceRange[0], value]);
            setMaxPrice(value);
        }
    };

    return (
        <div className="product-filter">
            <input
                type="text"
                placeholder="Nombre del producto"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
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
                <div className="price-range">
                    <input
                        type="number"
                        value={priceRange[0]}
                        onChange={handleMinPriceChange}
                        min={minPrice}
                        max={priceRange[1]}
                    />
                    <input
                        type="number"
                        value={priceRange[1]}
                        onChange={handleMaxPriceChange}
                        min={priceRange[0]}
                        max={maxPrice}
                    />
                </div>
            </div>
            <button onClick={handleFilter}>Filtrar</button>
            <button onClick={handleClear}>Limpiar</button>
        </div>
    );
};

export default ProductFilter;
