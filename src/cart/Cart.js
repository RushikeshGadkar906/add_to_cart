import "./cart.css";
import React, {useEffect, createContext, useReducer } from "react";
import { products } from "./Product";
import ContextCart from "./ContextCart";
import { reducer } from "./reducer";

const initialState = {
  item:products,
  totalAmount:0,
  totalItem:0
}

export const CartContext = createContext();

const Cart = () => {
  
  const [state, dispatch] = useReducer(reducer,initialState);

  const removeItem = (id) =>{
    return dispatch({
      type:"REMOVE_ITEM",
      payload:id,
    })
  }

  const clearCart = () =>{
    return dispatch({
      type:"CLEAR_CART"
    })
  }

  const incrementQuantity = (id) =>{
    return dispatch({
      type:"INCREMENT_QUANTITY",
      payload:id,
    })
  }
 
  const decrementQuantity = (id) =>{
    return dispatch({
      type:"DECREMENT_QUANTITY",
      payload:id,
    })
  }

  useEffect(()=>{
    dispatch({ type: "GET_TOTAL" });
    
  },[ state.item ])

  return (
    <>
      <CartContext.Provider value={ {...state,removeItem,clearCart,incrementQuantity,decrementQuantity}}>
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
