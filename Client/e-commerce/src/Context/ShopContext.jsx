import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { ServerContext } from './ServerContext'
import axios from 'axios'
import { useEffect } from 'react'

export const shopDataContext=createContext()
export const ShopContext = ({children}) => {
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

    const Addtocart =(itemId,size)=>{
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
    console.log(cartData)
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

    useEffect(()=>{
        getProducts()
    },[])
    let value={
    products,setProducts,currency,delivery_fee,getProducts,search,showSearch,setSearch,setShowSearch,Addtocart,getCartCount,setCartItem,cartItem
    }
    
  return (
    <shopDataContext.Provider value={value}>
    {children}
    </shopDataContext.Provider>
  )
}
