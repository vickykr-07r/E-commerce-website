import React from "react";
import Style from "../Component/LatestCollection.module.css";
import { useContext } from "react";
import { shopDataContext } from "../Context/ShopContext.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./Card.jsx";
export const LatestCollection = () => {
  let { products } = useContext(shopDataContext);
  let [latestProducts, setLatestProducts] = useState([]);



  useEffect(() => {
    setLatestProducts(products?.slice(0, 8));
  }, [products]);
  return (
    <div className={Style.container}>
      <div className={Style.heading}>
        <h1>Latest Collections</h1>
        <span>Step Into Style - New Collection Dropping The Seasons!</span>
      </div>

      <div className={Style.cardd}>
        {latestProducts?.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            image={item.image1}
            id={item._id}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
