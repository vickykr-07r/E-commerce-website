import React from "react";
import Style from "../Order/Order.module.css";
import Nav from "../Component/Nav";
import SideBar from "../Component/SideBar";
import { useState } from "react";
import { AdminContext } from "../Context/AuthContext.jsx";
import { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { SiEbox } from "react-icons/si";
export const Order = () => {
  let [order, setOrder] = useState([]);
  let { serverUrl } = useContext(AdminContext);

  const fetchallOrders = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/order/allorders`, {
        withCredentials: true,
      });
      console.log(result.data);
      setOrder(result.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const statusHandler=async(e,orderId)=>{
    try {
      const result=await axios.put(`${serverUrl}/api/order/updatestatus`,{orderId,status:e.target.value},{withCredentials:true})
      if(result.data){
       await fetchallOrders()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchallOrders();
  }, []);
  return (
    <div className={Style.Container}>
      <div className={Style.nav}>
        <Nav />
      </div>

      <div className={Style.box}>
        <div className={Style.boxleft}>
          <div className={Style.sidebar}>
            <SideBar />
          </div>
        </div>

        <div className={Style.boxright}>
          <div className={Style.heading}>
            <h1>All Orders</h1>
          </div>

          {order.map((order, index) => {
            return (
              <div className={Style.orderr} key={index}>
                <div className={Style.orderrleft}>
                  <SiEbox />
                </div>
                <div className={Style.orderrright}>
                  <div className={Style.first}>
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return (
                          <p key={index}>
                            {item.name.toUpperCase()} x {item.quantity}{" "}
                            <span>{item.size}</span>
                          </p>
                        );
                      } else {
                        return (
                          <p key={index}>
                            {item.name.toUpperCase()} * {item.quantity}{" "}
                            <span>{item.size}</span>
                          </p>
                        );
                      }
                    })}
                  </div>

                  <div className={Style.second}>
                    <p>
                      {order.address.firstName + " " + order.address.lastName}
                    </p>
                    <p>
                      {order.address.street +
                        " " +
                        order.address.state +
                        " " +
                        order.address.country +
                        " " +
                        order.address.pinCode}
                    </p>
                    <p>{order.address.phoneNumber}</p>
                  </div>

                  <div className={Style.third}>
                    <p>Items: {order.items.length}</p>
                    <p>Method: {order.paymentMethod}</p>
                    <p>
                      Payment:
                      <span
                        className={
                          order.payment ? Style.success : Style.pending
                        }
                      >
                        {order.payment ? " Done" : " Pending"}
                      </span>
                    </p>
                    <p>Date: {new Date(order.date).toDateString()}</p>
                    <p>₹{order.amount}</p>
                  </div>

                  <div className={Style.fouth}>
                    <select value={order.status} onChange={(e)=>{statusHandler(e,order._id)}}>
                      <option value="Order Placed">Order Placed</option>
                      <option value="Packing">Packing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Out For Delivery">Out For Delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
