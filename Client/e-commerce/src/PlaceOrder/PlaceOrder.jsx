import { CartTotal } from "../CartTotal/CartTotal.jsx";
import Nav from "../Component/Nav.jsx";
import Style from "../PlaceOrder/PlaceOrder.module.css";
import { useState } from "react";
import { useContext } from "react";
import { shopDataContext } from "../Context/ShopContext.jsx";
import { ServerContext } from "../Context/ServerContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const PlaceOrder = () => {
  let [method,setMethod]=useState('cod')
  const navigate = useNavigate();
  let [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    pinCode:"",
    country:"",
    phoneNumber:""
  })
  const { cartItem, products, getCartAmount, delivery_fee, setCartItem } = useContext(shopDataContext);
  const { Serverurl } = useContext(ServerContext);
 function handleInput(e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
}

const onSubmitHandler = async (e) => {
  e.preventDefault();

  

  try {
    let orderItems = [];

    for (const productId in cartItem) {
  for (const size in cartItem[productId]) {
    if (cartItem[productId][size] > 0) {

      const itemInfo = structuredClone(
        products.find((product) => product._id === productId)
      );

      if (itemInfo) {
        itemInfo.size = size;
        itemInfo.quantity = cartItem[productId][size];
        orderItems.push(itemInfo);
      }
    }
  }
}

    console.log("Cart Items:", cartItem);
console.log("Products:", products);
console.log("Order Items:", orderItems);

   let orderData = {
    address: formData,
    items: orderItems,
    amount: getCartAmount() + delivery_fee,
   }

   switch (method) {
  case "cod":
    const result = await axios.post(
      `${Serverurl}/api/order/placeorder`,
      orderData,
      { withCredentials: true }
    );
    console.log(result.data);
    if(result.data){
      setCartItem({})
      navigate("/order")
    }else{
      console.log(result.data.message)
    }
    break;

  default:
    console.log("Invalid Payment Method");
}
  } catch (err) {
    console.error("Error occurred while placing the order:", err);
  }
};


  return (
    <div className={Style.container}>
      <div className={Style.nav}>
        <Nav />
      </div>
      <div className={Style.heading}>
        <h1>Delivery Information</h1>
      </div>
      <div className={Style.form}>
        <div className={Style.formleft}>
        <form>
          <div className={Style.name}>
            <input type="text" placeholder="First Name" required value={formData.firstName} onChange={handleInput} name="firstName"/>
            <input type="text" placeholder="Last Name" required value={formData.lastName} onChange={handleInput} name="lastName"/>
          </div>
          <input type="email" placeholder="Enter Email" required value={formData.email} onChange={handleInput} name="email"/>
          <input type="text" placeholder="Street" required value={formData.street} onChange={handleInput} name="street"/>
          <div className={Style.address}>
            <input type="text" placeholder="City" required value={formData.city} onChange={handleInput} name="city"/>
            <input type="text" placeholder="State"  required value={formData.state} onChange={handleInput} name="state"/>
          </div>
          <div className={Style.code}>
            <input type="text" placeholder="Pin Code" required value={formData.pinCode} onChange={handleInput} name="pinCode"/>
            <input type="text" placeholder="Country" required value={formData.country} onChange={handleInput} name="country"/>
          </div>
          <input type="text" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleInput} name="phoneNumber"/>

        </form>
        </div>
        <div className={Style.formright}>
         <CartTotal/>
         <div className={Style.rightheading}>
           <h2>Payment Method</h2>
         </div>
          <div className={Style.paymentmethod}>
            <button onClick={()=>{setMethod("razorpay")}} className={method==="razorpay" ? Style.active : ""}>Razorpay</button>
            <button onClick={()=>{setMethod("cod")}} className={method==="cod" ? Style.active : ""} >Cash on Delivery</button>
          </div>
         <button onClick={onSubmitHandler}>Place Order</button>
        </div>
        
      </div>
    </div>
  );
};
