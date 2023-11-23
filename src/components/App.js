import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginForm from "./LoginForm"
import Shirts from '../pages/Shirts';
import Shoes from '../pages/Shoes';
import Trousers from '../pages/Trousers';
import Cart from '../pages/Cart'

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
      setCart([...cart, { ...product }]);
    }
  }
  function handleRemoveFromCart(productId) {
    setCart( cart.filter((item) =>item.id !== productId));
    
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<LandingPage onLogout={handleLogout}/>} />
              <Route path="/shirts" element={<Shirts isproduct={isproduct} onAddToCart={handleAddToCart} />} />
              <Route path="/shoes" element={<Shoes isproduct={isproduct} onAddToCart={handleAddToCart} />} />
              <Route path="/trousers" element={<Trousers isproduct={isproduct} onAddToCart={handleAddToCart} />} />
              <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />} />              
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
