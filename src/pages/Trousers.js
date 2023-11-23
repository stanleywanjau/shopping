import React from 'react';
import { Link } from 'react-router-dom';

function Trousers({ isproduct, onAddToCart }) {
  return (
    <div className="card-container">
      {isproduct?.trousers?.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} className="card-image" />
          <div className="card-details">
            <p>{product.name}</p>
            <p><span>Brand:</span> {product.brand}</p>
            <p><span>Price:</span> {product.price}</p>
            <p><span>Size:</span> {product.size}</p>
            <p><span>Stock:</span> {product.stock}</p>
            {/* Wrap the card details in a Link to the cart */}
            <Link to="/cart" >
              <button className='add-to-cart' onClick={() => onAddToCart(product)}>
                Add to cart
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Trousers;
