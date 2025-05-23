import React from "react";
import "../../styles/CartPage.css";

const CartPage = ({ cartItems, setCartItems }) => {
    // Agrupar productos por id y contar la cantidad
    const groupedItems = cartItems.reduce((acc, item) => {
        const existingItem = acc.find(i => i.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            acc.push({ ...item, quantity: 1 });
        }
        return acc;
    }, []);

    // Función para eliminar un producto del carrito
    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="cart-page">
            <h2>Carrito de Compras</h2>
            {groupedItems.length === 0 ? (
                <p className="empty-cart">El carrito está vacío</p>
            ) : (
                <ul>
                    {groupedItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <p className="cart-item-name">{item.name}</p>
                                <p className="cart-item-price">${item.price}</p>
                                <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
                                <button 
                                    className="remove-item-button"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartPage;
