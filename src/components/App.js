import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginForm from "./LoginForm"
import Shirts from '../pages/Shirts';
import Shoes from '../pages/Shoes';
import Trousers from '../pages/Trousers';
import Cart from '../pages/Cart'
import NavBar from './Navbar';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {    
    setLoggedIn(true);
  };

  const handleLogout = () => {    
    setLoggedIn(false);
  };

  const[isproduct,setIsProduct] = useState([])
  const [isLoader,setIsLoader]=useState(false)
  const[cart,setCart]=useState([])
 

  useEffect(()=>{
    fetch(" http://localhost:3000/products")
    .then(res=>res.json())
    .then((products)=>{ 
      setIsProduct(products)
      setIsLoader(true) 
    })
  },[])
 //console.log("Products:", isproduct)

 if (!isLoader) {
  return <h3>Loading...</h3>;
}
function handleAddToCart(product) {
  if (!cart.some((cartItem) => cartItem.id === product.id)) {
    // Update the local cart state
    setCart([...cart, product]);

    // Send a POST request to add the item to the cart on the server
    fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server if necessary
        console.log('Item added to cart on the server:', data);
      })
      .catch((error) => {
        console.error('Error adding item to cart on the server:', error);
      });
  }
}
function handleRemoveFromCart(productId) {
  // Update the local cart state
  setCart(cart.filter((item) => item.id !== productId));

  // Send a DELETE request to remove the item from the cart on the server
  fetch(`http://localhost:3000/cart/${productId}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server if necessary
      console.log('Item removed from cart on the server:', data);
    })
    .catch((error) => {
      console.error('Error removing item from cart on the server:', error);
    });
}
  const handleBuyItem = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.stock > 0 ? { ...item, stock: item.stock - 1 } : item
    );
    setCart(updatedCart);
  };

  
   
  return (
    <div className="App">
      <Router>
            <NavBar  onLogout={handleLogout}/>
          <Routes>
          {isLoggedIn ? (
            
            <>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/shirts" element={<Shirts isproduct={isproduct} onAddToCart={handleAddToCart} />} />
              <Route path="/shoes" element={<Shoes isproduct={isproduct} onAddToCart={handleAddToCart} cart={cart} />} />
              <Route path="/trousers" element={<Trousers isproduct={isproduct} onAddToCart={handleAddToCart} />} />
              <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} onBuyItem={handleBuyItem}
                 />} />              
            </>
            
          ) : (
            <>
             <Route path="/" element={<LoginForm onLogin={handleLogin}/>} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
