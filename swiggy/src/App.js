import React,{useState,useEffect, useContext} from 'react';
import './App.css';
import { BrowserRouter, Route  } from 'react-router-dom';
import { UserContext, CartContext } from './UserContext';
import Home from './Home';
import Cart from './Card';
import Signiin from './Signin';


const App =() => {
  
  
  const [cartData, setCartData] = useState([]) // ya dekho yahi maine value ma pass kr dia h 
  return (
    
    
  <UserContext.Provider value="Your Tasty Meal is here :)">
    <CartContext.Provider value={{cartData, setCartData}} >
    <Route path="/" exact component={Home}/>
    <Route path="/cart"  component={Cart}/>
    <Route path="/signin" component={Signiin}/>
    </CartContext.Provider>
   
  
   
   </UserContext.Provider>
   
  );
}

export default App;
