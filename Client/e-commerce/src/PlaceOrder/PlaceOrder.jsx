import { CartTotal } from "../CartTotal/CartTotal.jsx";
import Nav from "../Component/Nav.jsx";
import Style from "../PlaceOrder/PlaceOrder.module.css";
import { useState, useContext } from "react";
import { shopDataContext } from "../Context/ShopContext.jsx";
import { ServerContext } from "../Context/ServerContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const PlaceOrder = () => {
  const navigate = useNavigate();

  const [method, setMethod] = useState("cod");

  const [formData, setFormData] = useState({  
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    phoneNumber: "",
  });

  const { cartItem, products, getCartAmount, delivery_fee, setCartItem } =
    useContext(shopDataContext);

  const { Serverurl } = useContext(ServerContext);

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Razorpay Popup
  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_API_KEY,

      amount: order.amount,

      currency: order.currency,

      name: "Order Payment",

      description: "E-Commerce Payment",

      order_id: order.id,

      handler: async (response) => {
        try {
          const verify = await axios.post(
            `${Serverurl}/api/order/verifyrazorpay`,
            response,
            {
              withCredentials: true,
            },
          );
          console.log(verify.data)

          if (verify.data.success) {
            setCartItem({});
            navigate("/order");
          } else {
            alert("Payment Verification Failed");
          }
        } catch (error) {
          console.log(error);
        }
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let orderItems = [];

      for (const productId in cartItem) {
        for (const size in cartItem[productId]) {
          if (cartItem[productId][size] > 0) {
            const itemInfo = structuredClone(
              products.find((item) => item._id === productId),
            );

            if (itemInfo) {
              itemInfo.size = size;
              itemInfo.quantity = cartItem[productId][size];

              orderItems.push(itemInfo);
            }
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        case "cod":
          const result = await axios.post(
            `${Serverurl}/api/order/placeorder`,
            orderData,
            {
              withCredentials: true,
            },
          );

          if (result.data.success) {
            setCartItem({});
            navigate("/order");
          } else {
            alert(result.data.message);
          }

          break;

        case "razorpay":
          const razorpayResponse = await axios.post(
            `${Serverurl}/api/order/placeorderrazorpay`,
            orderData,
            {
              withCredentials: true,
            },
          );

          if (razorpayResponse.data.success) {
            initPay(razorpayResponse.data.order);
          } else {
            alert(razorpayResponse.data.message);
          }

          break;

        default:
          console.log("Invalid Payment Method");
      }
    } catch (error) {
      console.log(error);
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
          <form onSubmit={onSubmitHandler}>
            <div className={Style.name}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInput}
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInput}
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              required
            />

            <input
              type="text"
              placeholder="Street"
              name="street"
              value={formData.street}
              onChange={handleInput}
              required
            />

            <div className={Style.address}>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleInput}
                required
              />

              <input
                type="text"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleInput}
                required
              />
            </div>

            <div className={Style.code}>
              <input
                type="text"
                placeholder="Pin Code"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleInput}
                required
              />

              <input
                type="text"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleInput}
                required
              />
            </div>

            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInput}
              required
            />

            <div className={Style.rightheading}>
              <h2>Payment Method</h2>
            </div>

            <div className={Style.paymentmethod}>
              <button
                type="button"
                onClick={() => setMethod("razorpay")}
                className={method === "razorpay" ? Style.active : ""}
              >
                Razorpay
              </button>

              <button
                type="button"
                onClick={() => setMethod("cod")}
                className={method === "cod" ? Style.active : ""}
              >
                Cash on Delivery
              </button>
            </div>

            <CartTotal />

            <button type="submit">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};
