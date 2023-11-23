import React from 'react';
import { Link } from 'react-router-dom';

function Shirts({isproduct,onAddToCart}) { 
  
  return (
    <div className="card-container">
     
      {/* Render the fetched shirt data here */}
      {isproduct?.shirts?.map(shirt => (
        <div className= "card" key={shirt.id}>
          <img className="card-image" src={shirt.image} alt= {shirt.name}/>
          <div className="card-details">
          <p> {shirt.name}</p>
          <p><span>Brand:</span> {shirt.brand}</p>
          <p><span>Price:</span> {shirt.price}</p>
          <p><span>Size:</span> {shirt.size}</p>
          <p><span>Stock:</span> {shirt.stock}</p>
          <Link to="/cart"><button className='add-to-cart'>Add to cart</button></Link>
          </div>
          
       
        </div>
      ))}
    </div>
  );
}

export default Shirts;

