import React, { useState } from 'react'
import Style from "../Cart/Cart.module.css"
import Nav from '../Component/Nav.jsx'
import { useContext } from 'react'
import { shopDataContext } from '../Context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export const Cart = () => {
    let{products,cartItem,updateQuantity,}=useContext(shopDataContext)
    let[cartData,setCartData]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        const tempData=[];
        for(const items in cartItem){
            for(const item in cartItem[items]){
                if(cartItem[items][item]>0){
                 tempData.push({
                    _id:items,
                    size:item,
                    quantity:cartItam[items][item],
                 })
                }
            }
        }
        setCartData(tempData);
    },[cartItem])
  return (
    <div className={Style.container}>
    <div className={Style.nav}>
    <Nav/>
    </div>
    </div>
  )
}
