import React from 'react'
import Style from "../Order/Order.module.css"
import Nav from '../Component/Nav'
import { useContext } from 'react'
import { ServerContext } from '../Context/ServerContext.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
export const Order = () => {
  let [orderData,setOrderData] = useState([])
  let{Serverurl}=useContext(ServerContext);
  const loadOrderData=async()=>{
    try{
    const result=await axios.post(`${Serverurl}/api/order/userorder`,{},{withCredentials:true})
    if (result.data.success) {

    let allOrderData = [];

    result.data.orders.forEach((order) => {

        order.items.forEach((item) => {

            allOrderData.push({
                ...item,
                status: order.status,
                payment: order.payment,
                date: order.date,
                paymentMethod: order.paymentMethod,
            });

        });

    });

    setOrderData(allOrderData.reverse());

} 
    }catch(error){
     console.log(error)
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[])

  return (
    <div className={Style.Container}>

    <div className={Style.nav}>
    <Nav/>
    </div>

    <div className={Style.heading}>
      <h2>My Orders</h2>
    </div>

    <div className={Style.box}>

    </div>

    </div>
  )
}
