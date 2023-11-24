import React ,{useState}from 'react';


function Cart({ cart, onRemoveFromCart,onBuyItem  }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleBuyClick = (itemId, stock) => {
    if (stock > 0) {
      // Call the onBuyItem function with the item ID to reduce the stock by one
      onBuyItem(itemId);
    } else {
      // Display an alert if the stock is 0
      alert('This item is out of stock.');
    }
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCart =
    searchTerm.length > 3
      ? cart.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : cart;
      const handlePayClick = () => {
        const totalCost = cart.reduce((total, item) => {
          return total + ((item.stock - item.stockInitial) * item.price);
        }, 0);
    
        alert(`Payment successful! Thank you for shopping! Total Cost: $${totalCost.toFixed(2)}`);
      };
      
  return (
    <>
      <h2>Shopping Cart</h2>
      <div>
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="card-container">
        {filteredCart.length === 0 ? (
          <p>No items match the search criteria.</p>
        ) : (
          filteredCart.map((item) => (
            <div key={item.id} className="card">
              <div className="card-details">
                <img src={item.image} alt={item.name} className="card-image" />
                <p> {item.name}</p>
                <p>
                  <span>Brand:</span> {item.brand}
                </p>
                <p>
                  <span>Price:</span> {item.price}
                </p>
                <p>
                  <span>Size:</span> {item.size}
                </p>
                <p>
                  <span>Stock:</span> {item.stock}
                </p>
              </div>
              
            <button
                style={{ backgroundColor: 'green' }}
                onClick={() => handleBuyClick(item.id, item.stock)}
              >
                BUY
              </button>
            <button className="remove-from-cart" onClick={() => onRemoveFromCart (item.id)} style={{backgroundColor:"red"}}>
              Remove from Cart
            </button>
      <button onClick={handlePayClick} style={{ backgroundColor: 'blue' }}>
        Pay
      </button>
          </div>
        )))}
      </div>
    </>
  );
}

export default Cart;
