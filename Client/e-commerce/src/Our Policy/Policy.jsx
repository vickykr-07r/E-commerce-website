import React from 'react'
import Style from "../Our Policy/Policy.module.css"
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";
export const Policy = () => {
  return (
    <div className={Style.cointainer}>
    <div className={Style.heading}>
    <h1>Our Policy</h1>
    <p>Customer-Friendly Policies-Committed To Your Satisfaction And Safety</p>
    </div>
    <div className={Style.box}>
    <div className={Style.left}>
    <span><MdOutlineCurrencyExchange /></span>
    <h1>Easy Exchange Policy</h1>
    <p>Exchange Made Easy-Quick,Simple And Customer </p>
    </div>
    <div className={Style.middle}>
     <span><GiReturnArrow /></span>
     <h1>7 Days Return Policy</h1>
     <p>Shop With Confidence - 7 Days Easy Return Guarantee</p>
    </div>
    <div className={Style.right}>
     <span><BiSupport /></span>
     <h1>Best Customer Support </h1>
     <p>Trusted Customer Support - Your Satisfaction Is Our Policy</p>
    </div>
    </div>
    </div>
  )
}
