import React,{useState} from 'react';


function Shoes({ isproduct, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const handleAddToCart = (product) => {
    // Toggle the inCart status when adding to the cart
    product.inCart = !product.inCart;
    onAddToCart(product);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredShoes =
    searchTerm.length > 3
      ? isproduct?.shoes?.filter((shoe) =>
          shoe.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : isproduct?.shoes;
  
  return (
    <>
    <div>
        <input
          type="text"
          placeholder="Search shoe..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    <div className="card-container">
    {filteredShoes?.map((product) => (
      <div key={product.id} className="card">
        <img src={product.image} alt={product.name} className="card-image" />
        <div className="card-details">
          <p>{product.name}</p>
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

  )
}

export default Shoes