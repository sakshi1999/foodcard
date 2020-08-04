import React,{useState,useEffect, useContext} from "react";
import { UserContext,CartContext } from "./UserContext";


const Card = () => {
    
    const msg = useContext(UserContext);
    const {cartData, setCartData} = useContext(CartContext)
    const [cartDatalist, setCartDataList ] = useState(cartData)
    const initialState = 0;
   const [fresh, setfresh] = useState(1)

    const getAmount = () => {
      let amount = 0
      cartData.map(data => 
        amount = amount + data.price
        )
        return amount;
    }
    useEffect(()=>{
      const newdata = cartData.map((data)=>{
        return {
          ...data,
          quantity: 1
        }
      })

      console.log('new cartdata with quantity', newdata)
      setCartDataList(newdata)

    },[])
     
    
    return(
        <div>
            <h1 className="bg-light text-center">{msg}</h1>
             
            {
               cartData?  cartDatalist.map((data,index)=><div>

            <div className=" col-3 bg-dark border border-white text-center" key={index}>
                <img src={data.picture}
                 alt="photo from backend"
                 style={{ maxHeight: "100%", maxWidth: "100%" }} 
                 />
                 <h2 className="text-white ">{data.name}</h2>
                 <p className="text-white ">{data.description}</p>
                 <h5 className="text-white ">{data.price}</h5>
                 <h5 className="text-white">{data.quantity}</h5>
                 <button className=" btn btn-center bg-success text-white " 
                 onClick={()=>{
                  console.log(data)
                  const index = cartDatalist.findIndex((memo)=>memo.id===data.id)
                  console.log(index)
                     cartData.splice(index,1)
                    console.log(cartDatalist)
                    setCartDataList(cartDatalist)
                    setCartData(cartData)
                    setfresh(fresh+1)

                 }}>
                     remove item</button>
                     <button className="btn btn-right border border-white text-info"
                     onClick={()=>{
                        data.quantity = data.quantity+1 

                        setfresh(fresh+1)
                     }}
                     >+</button>
                     <button className="btn btn-right border border-white text-info"
                     onClick={()=>{
                      data.quantity = data.quantity===1 ? 1 : data.quantity-1
                        setfresh(fresh+1)
                     }}
                     >-</button>
                     
            </div>

                </div>):null
                }
                
                <h3 className="text-dark bg-info text-center">your total bill {getAmount()}RS</h3>     
            
        </div>
    )
}

export default Card;