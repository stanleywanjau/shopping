import React ,{useState}from 'react';


function Trousers({ isproduct, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const handleAddToCart = (product) => {
    // Toggle the inCart status when adding to the cart
    product.inCart = !product.inCart;
    onAddToCart(product);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTrousers =
    searchTerm.length > 3
      ? isproduct?.trousers?.filter((trouser) =>
          trouser.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : isproduct?.trousers;
  return (
    <>
    <div>
        <input
          type="text"
          placeholder="Search trouser..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    <div className="card-container">
      {filteredTrousers?.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} className="card-image" />
          <div className="card-details">
            <p>{product.name}</p>
            <p><span>Brand:</span> {product.brand}</p>
            <p><span>Price:</span> {product.price}</p>
            <p><span>Size:</span> {product.size}</p>
            <p><span>Stock:</span> {product.stock}</p>
            {/* Wrap the card details in a Link to the cart */}
         
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

export default Trousers;
