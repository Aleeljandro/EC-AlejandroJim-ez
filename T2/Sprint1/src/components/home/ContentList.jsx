import React from 'react';

const ContentList = ({ products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default ContentList;