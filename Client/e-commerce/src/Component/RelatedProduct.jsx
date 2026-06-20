import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../Context/ShopContext.jsx';
import Style from "../Component/RelatedProduct.module.css"
import { Card } from './Card.jsx';

export const RelatedProduct = ({category,subCategory,currentProductId}) => {
  let {products}=useContext(shopDataContext);
  let [related,setRelated]=useState([]);

  useEffect(()=>{
     if(products.length > 0){
     
      let productsCopy=products.slice()
      productsCopy=productsCopy.filter((item)=> category===item.category)
      productsCopy=productsCopy.filter((item)=>subCategory===item.subCategory)
      productsCopy=productsCopy.filter((item)=>currentProductId !=item._id)
      setRelated(productsCopy.slice(0,4))
     }
  },[products,category,subCategory,currentProductId])
  return (
    <div className={Style.container}>

     <div className={Style.heading}>
      <h1>Related</h1>
      <h2>Product</h2>
     </div>

     <div className={Style.box}>
     {
      related.map((item,index)=>(
        <Card key={index} id={item._id} name={item.name} price={item.price} image={item.image1}/>
      ))
     }
     </div>

    </div>
  )
}
