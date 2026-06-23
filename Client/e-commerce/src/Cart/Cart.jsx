import React, { useState } from "react";
import Style from "../Cart/Cart.module.css";
import Nav from "../Component/Nav.jsx";
import { useContext } from "react";
import { shopDataContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { CartTotal } from "../CartTotal/CartTotal.jsx";
export const Cart = () => {
  let { products, cartItem, updateQuantity } = useContext(shopDataContext);
  let [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);
  return (
    <div className={Style.container}>
      <div className={Style.nav}>
        <Nav />
      </div>
      <div className={Style.box}>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id,
          );

          if (!productData) return null;

          return (
            <div key={index}>
              <div className={Style.left}>
                <div className={Style.left1}>
                  <img src={productData.image1} alt="" />
                </div>

                <div className={Style.left2}>
                  <p>{productData.name}</p>
                  <span>{productData.price}</span>
                  <span>{item.size}</span>
                </div>
              </div>

              <div className={Style.middle}>
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value),
                        )
                  }
                />
                <MdDelete className={Style.delete} onClick={()=>{updateQuantity(item._id,item.size,0)}}/>
              </div>
            </div>
          );
        })}
      </div>
      <div className={Style.total}>
       <CartTotal/>
       <button onClick={()=>{
        if(cartData.length > 0){
          navigate("/placeorder")
        }else{
         console.log("Your Cart Is Empty")
        }
       }}>Proceed To Checkout</button>
      </div>
    </div>
  );
};
