import React from 'react';
import Style from "../Component/Card.module.css";
import { useNavigate } from 'react-router-dom';

export const Card = ({ name, image, id, price }) => {
  let naviagte=useNavigate()
  return (
    <div className={Style.container} >
      <img src={image} alt={name} onClick={()=>{naviagte(`/productdetail/${id}`)}}/>
      <h1>{name}</h1>
      <span>₹{price}</span>
    </div>
  );
};