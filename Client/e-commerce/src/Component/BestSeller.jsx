import React, { useContext, useEffect, useState } from "react";
import Style from "../Component/BestSeller.module.css"; 
import { shopDataContext } from "../Context/ShopContext";
import { Card } from "./Card";


export const BestSeller = () => {
  const { products } = useContext(shopDataContext);

  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const filterProduct = products.filter((item) => item.bestSeller);
    setBestSeller(filterProduct.slice(0, 4));
  }, [products]);

  return (
    <div className={Style.container}>
      <div className={Style.heading}>
        <h1>Best Seller</h1>
        <p>Tried, Tested, Loved Discover Our All-Time Best Sellers.</p>
      </div>

      <div className={Style.box}>
        {bestSeller.map((item, index) => (
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
