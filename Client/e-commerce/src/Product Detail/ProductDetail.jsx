import React, { useContext, useEffect, useState } from 'react'
import Style from "../Product Detail/ProductDetail.module.css"
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../Context/ShopContext'
export const ProductDetail = () => {
    let {productId}=useParams()
    let {products}=useContext(shopDataContext)
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

  return (
    <div className={Style.container}>
<h1>hello</h1>
    </div>
  )
}
