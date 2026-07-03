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
 const loadOrderData = async () => {
  try {
    const result = await axios.post(`${Serverurl}/api/order/userorder`,{},{ withCredentials: true })
    console.log(result.data[0].items);

    if (result.data) {
      let allOrdersItem = []

      result.data.map((order) => {
        order.items.map((item) => {
          item['status'] = order.status
          item['payment'] = order.payment
          item['paymentMethod'] = order.paymentMethod
          item['date'] = order.date

          allOrdersItem.push(item)
        })
      })

      setOrderData(allOrdersItem.reverse())
    }
  } catch (error) {
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
    {
      orderData.map((item,index)=>{
        return(
          <div className={Style.order} key={index}>
            <div className={Style.left}>
             <div className={Style.orderImage}>
            <img src={item.image1} alt="" />
           </div>
            <div className={Style.orderDetails}>
              <h1>{item.name}</h1>
              <p> ₹{item.price}</p>
              <p>{item.quantity}</p>
              <p>{item.size}</p>
              <p>{new Date(item.date).toDateString()}</p>
              <p>Payment Method: {item.paymentMethod}</p>
            </div>
            </div>
            <div className={Style.middle}>
            <p className={Style.status}>● {item.status}</p>
            </div>
            <div className={Style.right}>
            <button className={Style.trackBtn} onClick={loadOrderData}>Track Order</button>
            </div>
           
          </div>
        )
      })
    }
    </div>

    </div>
  )
}
