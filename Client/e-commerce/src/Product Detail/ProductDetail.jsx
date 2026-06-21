import React, { useContext, useEffect, useState } from 'react'
import Style from "../Product Detail/ProductDetail.module.css"
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../Context/ShopContext'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Nav from '../Component/Nav';
import { RelatedProduct } from '../Component/RelatedProduct';
export const ProductDetail = () => {
    let {productId}=useParams()
    let {products,Addtocart,getCartCount,setCartItem}=useContext(shopDataContext)
    let [productData,setProductData]=useState(false)
    const[image,setImage]=useState("")
    const[image1,setImage1]=useState("")
    const[image2,setImage2]=useState("")
    const[image3,setImage3]=useState("")
    const[image4,setImage4]=useState("")

    const [size,setSize]=useState("")

    const fetchProductData=async()=>{
        products.map((item)=>{
         if(item._id===productId){
        setProductData(item)
        setImage(item.image1)
        setImage1(item.image1)
        setImage2(item.image2)
        setImage3(item.image3)
        setImage4(item.image4)
        return null
         }
        })
    }

    useEffect(()=>{
        fetchProductData();
    },[productId,products])
  return productData ? (
    <div className={Style.container}>
      <div className={Style.nav}>
      <Nav/>
      </div>
    
    <div className={Style.box}>
    <div className={Style.left}>
    <div className={Style.imagebox}>
      <img src={image1} alt="" onClick={()=>{setImage(image1)}}/>
      <img src={image2} alt="" onClick={()=>{setImage(image2)}}/>
      <img src={image3} alt="" onClick={()=>{setImage(image3)}}/>
      <img src={image4} alt="" onClick={()=>{setImage(image4)}}/>
     </div>
     <div className={Style.bigimagebox}>
      <img src={image} alt="" />
     </div>
    </div>

    <div className={Style.right}>
     <div className={Style.rightheading}>
     <h1>{productData.name.toUpperCase()}</h1>
     </div>

     <div className={Style.rightstar}>
     <span><FaStar /></span>
     <span><FaStar /></span>
     <span><FaStar /></span>
     <span><FaStar /></span>
     <span><FaStarHalfAlt /></span>
     </div>

     <div className={Style.rightprice}>
      ₹{productData.price}
     </div>

     <div className={Style.rightpara}>
     <p>Best Quality And Daily use products and stylish, breathable cotton shirt with a modern slim fit. Easy to wash, super comfortable and designed for effortless style.</p>
     </div>

    <div className={Style.size}>
     <h1>Select Size</h1>

  <div className={Style.sizeBox}>
    <button
      className={size==="S" ? Style.active : ""}
      onClick={()=>setSize("S")}
    >
      S
    </button>

    <button
      className={size==="M" ? Style.active : ""}
      onClick={()=>setSize("M")}
    >
      M
    </button>

    <button
      className={size==="L" ? Style.active : ""}
      onClick={()=>setSize("L")}
    >
      L
    </button>

    <button
      className={size==="XL" ? Style.active : ""}
      onClick={()=>setSize("XL")}
    >
      XL
    </button>
  </div>
</div>

     <div className={Style.button}>
     <button onClick={()=>Addtocart(productData._id,size)}>Add to cart</button>
     </div>

     <div className={Style.return}>
      <p>100% Original Product</p>
      <p>Cash On delivery Available on this product</p>
      <p>Easy return and exchange policy within 7 days</p>
     </div>

    </div>
     

    </div>

    <div className={Style.descriptionReview}>

     <div className={Style.Heading}>
      <button>Description</button>
      <button>Review</button>
     </div>
    <div className={Style.desciptionreviewpara}>
     Upgrade your wardrobe with this stylish slim-fit cotton shirt, available now on OneCart. Crafted from breathable, high-quality fabric, it offers all-day comfort and effortless style. Easy to maintain and perfect for any setting, this shirt is a must-have essential for those who value both fashion and function.
    </div>
    </div>
    <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id}/>
    </div>
  ):( <div>
      <h1>Hello world</h1>
      
    </div>
  )
}
