import React, { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import "./Home.css";
import { UserContext,CartContext } from "./UserContext";



const Home = () => {

    
    const[product, setProduct] = useState([]);
    const msg = useContext(UserContext);
    const {cartData, setCartData}  = useContext(CartContext)
    console.log('cart data check karte h ', cartData)


     const getSortedprice = ()=> {
     
       const sortedProducts = product.sort((a,b)=>
          a.price - b.price
       )
       console.log(sortedProducts)
        setProduct(sortedProducts);
      
    }

    useEffect(() => {
        Axios.get(`https://swiggyproduct.herokuapp.com/`)
        .then(res => {
          console.log(res);
          setProduct(res.data.product)
          
        })
        .catch(error => console.log(error))
      },[])


    return(
        <div>
        <div className="header header-expand-lg">
            <div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYQ_FrQxoQaCqgYU76_-U1qRDB1hS2U4aiGqRBZn3g2IEo33F&s"
                    alt="photo from swiggy" height="60" width="60"/>
            </div>
           <div>
            <Link className="text-dark"  to="/"><b>Home</b></Link>
           </div>
           <div>
           <Link className="text-dark" to="/cart" ><b>Cart</b></Link>
           </div>
           <div className="sort">
             <button className="bg-secondary text-center text-white" 
               onClick = {()=>getSortedprice()}>
               sort price</button>
           </div>
           </div>
           <h1 className="text-dark text-center">{msg}</h1>

    
           
            <div className="row  ">
            
            {product && product.length > 0 ? 
              (product.map((products ,index)=>{
            return(
                <div className=" col-3 bg-dark border border-white text-center" key={index}>
                <img src={products.picture}
                 alt="photo from backend"
                 style={{ maxHeight: "100%", maxWidth: "100%" }} 
                 />
                 <h2 className="text-white ">{products.name}</h2>
                 <p className="text-white ">{products.description}</p>
                 <h5 className="text-white ">{products.price}RS</h5>
                 <button className=" btn btn-center bg-success text-white " 
                 onClick={()=>{
                    setCartData([...cartData, products]) 

                 }}>
                     Add to cart</button>
                     
            </div>
            )
          })
        ) 
      : "loading...."}
                  
            </div>
           
        </div>
    )
}

export default Home;
