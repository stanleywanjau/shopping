import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, onRemoveFromCart }) {
  const navigate = useNavigate();

  const handleRemoveFromCart = (itemId) => {
    onRemoveFromCart(itemId);
    navigate(-1);
  };

  return (
    <>
      <h2>Shopping Cart</h2>
      <div className="card-container">
        {cart.map((item) => (
          <div key={item.id} className="card">
            <div className="card-details">
              <img src={item.image} alt={item.name} className="card-image" />              
            </div>
            <button className="remove-from-cart" onClick={() => handleRemoveFromCart(item.id)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
