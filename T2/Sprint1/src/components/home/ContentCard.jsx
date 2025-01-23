import React from 'react';

const ContentCard = ({ product }) => {
  const { image, name, price } = product;

  return (
    <div className="content-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button className="btn-secondary">Añadir al carrito</button>
    </div>
  );
};

export default ContentCard;
