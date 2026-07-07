import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { ServerContext } from './ServerContext'
import axios from 'axios'
import { useEffect } from 'react'
import { useSelector } from "react-redux";

export const shopDataContext=createContext()
export const ShopContext = ({children}) => {
    const {userData}=useSelector((state)=>state.user)
    let[search,setSearch]=useState("");
    let[showSearch,setShowSearch]=useState(false)
    let [products,setProducts]=useState([])
    let {Serverurl}=useContext(ServerContext)
    let [cartItem,setCartItem]=useState({})
    let currency="₹"
    let delivery_fee=40

    const getProducts=async()=>{
        try {
            let result=await axios.get(`${Serverurl}/api/product/list`,{withCredentials:true})
            setProducts(result.data)
        } catch (error) {
           console.log(error) 
        }
    }

    const Addtocart =async(itemId,size)=>{
    if(!size){
     console.log("Select Product Size");
     return;
    }

    let cartData=structuredClone(cartItem);

    if(cartData[itemId]){
     if(cartData[itemId][size]){
      cartData[itemId][size] +=1;
     }else{
        cartData[itemId][size]=1;
     }
    }else{
        cartData[itemId]={};
        cartData[itemId][size]=1;
    }
    setCartItem(cartData);
    
    if(userData){
    try {
        const result=await axios.post(`${Serverurl}/api/cart/add`,{itemId,size},{withCredentials:true})
        console.log(result.data)
    } catch (error) {
        console.log(error)
    }
    }
    }

    const getUserCart=async()=>{
        try {
            const result=await axios.post(`${Serverurl}/api/cart/get`,{},{withCredentials:true})
            setCartItem(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getCartCount=()=>{
        let totalCount=0;
        for(const items in cartItem){
            for(const item in cartItem[items]){
                try {
                    if(cartItem[items][item]>0){
                        totalCount+=cartItem[items][item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalCount
    }

    const updateQuantity=async(itemId,size,quantity)=>{
        let cartData=structuredClone(cartItem)
        cartData[itemId][size]=quantity
        setCartItem(cartData)

        if(userData){
            try {
                let result=await axios.post(`${Serverurl}/api/cart/update`,{itemId,size,quantity},{withCredentials:true})
            } catch (error) {
                console.log(error)
            }
        }
    }

    const getCartAmount=()=>{
        let totalAmount=0;
        for(const items in cartItem){
        let itemInfo=products.find((product)=>product._id===items);
        for(const item in cartItem[items]){
         try {
            if(cartItem[items][item]>0){
                totalAmount+=itemInfo.price*cartItem[items][item]
            }
         } catch (error) {
            console.log(error)
         }
        }
        }
        return totalAmount
    }

    useEffect(()=>{
        getProducts()
    },[])

    useEffect(() => {
   if(userData){
      getUserCart();
   }
}, [userData]);
    let value={
    products,setProducts,currency,delivery_fee,getProducts,search,showSearch,setSearch,setShowSearch,Addtocart,getCartCount,setCartItem,cartItem,updateQuantity,getCartAmount
    }
    
  return (
    <shopDataContext.Provider value={value}>
    {children}
    </shopDataContext.Provider>
  )
}
