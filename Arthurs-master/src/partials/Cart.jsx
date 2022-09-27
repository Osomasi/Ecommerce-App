import React, {useState} from "react";
import Header from "../partials/Header";


const cart=() =>{
const [showcart, setshowcart] =useState(true)
const handleCardState =() => setshowcart(!showcart)
    // const cartOn =() =>{
    //     updateCart();
    //     cart.addEventListener("click", () =>{
    //         let event =event.target;
    //         event = ($(event).parents())
    //         let cartOpen = false;
    //         for(let i=0; i < event.length; i++){
    //             if(event[i] === cart) {
    //                 cartOpen = true;
    //             }
    //         }
    //         if(!cartOpen){
    //             cartOff();
    //         }
    //     })
    
    // }

    // const cartOff =() =>{
        
    // }

    return(
        <div className="cart-container bg-black w-[100px]">
          {showcart?  
        <div className="cart">
                <div className="cart-header">Shopping Cart</div>
                <div className="cart-content"></div>
                <div className="checkout">Checkout!</div>
        </div>:null
          }
        </div>
)

}
const cartHolder = document.getElementById('cartholder')    
cartHolder.onclick = {handleCardState}


export default cart