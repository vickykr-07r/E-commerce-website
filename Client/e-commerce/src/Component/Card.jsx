import React from 'react';
import Style from "../Component/Card.module.css";

export const Card = ({ name, image, id, price }) => {
  return (
    <div className={Style.container}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <span>₹{price}</span>
    </div>
  );
};