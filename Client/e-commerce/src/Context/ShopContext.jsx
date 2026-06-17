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
    useEffect(()=>{
        getProducts()
    },[])
    let value={
    products,setProducts,currency,delivery_fee,getProducts,search,showSearch,setSearch,setShowSearch
    }
  return (
    <shopDataContext.Provider value={value}>
    {children}
    </shopDataContext.Provider>
  )
}
