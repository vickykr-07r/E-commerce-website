import React, { useContext } from 'react'
import { shopDataContext } from '../Context/ShopContext.jsx'
import Style from "../CartTotal/CartTotal.module.css"
export const CartTotal = () => {
    let{delivery_fee,getCartAmount,}=useContext(shopDataContext)
  return (
    <div className={Style.box1}>
    <div className={Style.heading}>
     <h1>Cart Total</h1>
    </div>
    <div className={Style.box}>

        <div className={Style.first}>
           <p>Subtotal</p>
         <p>{getCartAmount()}.00</p>
        </div>
        <hr />
        <div className={Style.second}>
        <p>Shipping Fee</p>
        <p>{delivery_fee}</p>
        </div>
        <hr />
        <div className={Style.third}>
         <b>Total</b>
         <b>{getCartAmount()===0 ? 0 : getCartAmount()+delivery_fee}</b>
        </div>
   
    </div>
    </div>
  )
}
