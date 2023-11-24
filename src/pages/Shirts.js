import React,{useState} from 'react';


function Shirts({isproduct,onAddToCart}) { 
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product) => {
    // Toggle the inCart status when adding to the cart
    product.inCart = !product.inCart;
    onAddToCart(product);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredShirts =
    searchTerm.length > 3
      ? isproduct?.shirts?.filter((shirt) =>
          shirt.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : isproduct?.shirts;
  
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search shirts..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    <div className="card-container">
     
      {/* Render the fetched shirt data here */}
      {filteredShirts?.map(product => (
        <div className= "card" key={product.id}>
          <img className="card-image" src={product.image} alt= {product.name}/>
          <div className="card-details">
          <p> {product.name}</p>
          <p><span>Brand:</span> {product.brand}</p>
          <p><span>Price:</span> {product.price}</p>
          <p><span>Size:</span> {product.size}</p>
          <p><span>Stock:</span> {product.stock}</p>
          
          <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              {product.inCart ? 'In Cart' : 'Add to Cart'}
            </button>
            
          </div>
          
       
        </div>
      ))}
    </div>
    </>
  );
}

export default Shirts;

