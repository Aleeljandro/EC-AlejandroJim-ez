import React, { useState } from 'react';
import CartPreview from './CartPreview';

const ParentComponent = () => {
  const [cartItems, setCartItems] = useState([
    { name: 'Product 1', quantity: 2, price: 10 },
    { name: 'Product 2', quantity: 1, price: 20 },
  ]);

  const handleClose = () => {
    console.log('Cart closed');
  };

  return (
    <div>
      <CartPreview cartItems={cartItems} onClose={handleClose} />
    </div>
  );
};

export default ParentComponent;