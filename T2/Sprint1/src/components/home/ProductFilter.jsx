import React from 'react';

const ProductFilter = () => {
  return (
    <section className="filter-bar">
      <select id="category-filter">
        <option value="">Categoría</option>
        <option value="clothing">Ropa</option>
        <option value="accessories">Accesorios</option>
      </select>
      <select id="price-filter">
        <option value="">Precio</option>
        <option value="low">Menor a mayor</option>
        <option value="high">Mayor a menor</option>
      </select>
      <select id="rating-filter">
        <option value="">Valoración</option>
        <option value="4+">4 estrellas o más</option>
      </select>
    </section>
  );
};

export default ProductFilter;