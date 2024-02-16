import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'
import { useEffect } from "react";
import CartItems from "../Components/CartItems/CartItems";

const ShopContext=createContext(null);//context is created

const getDefaultCart=()=>{
    let cart={}
    for(let index=0;index<all_product.length+1;index++)
    {
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{         //passing the value to lower descendents
   
    const [cartItems,setCartItems]=useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };
      
      useEffect(() => {
        console.log(cartItems);
      }, [cartItems]);
      

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    // console.log(cartItems);
    // console.log(contextValue);
    // console.log(ShopContext);

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        console.log("hi");
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price*cartItems[item];
                console.log(totalAmount);
            }
            
        }
        return totalAmount;
    }

    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem=totalItem+cartItems[item];
            }
        }
        return totalItem;
    }

    // console.log( getTotalCartAmount());

    const contextValue= {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart}; //send to productdisplay
    return (
        <ShopContext.Provider value={contextValue}>
           {props.children} 
        </ShopContext.Provider>
    )
}
export  default ShopContextProvider;
export  {ShopContext};
