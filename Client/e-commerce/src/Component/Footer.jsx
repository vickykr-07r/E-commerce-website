import React from 'react'
import Style from "../Component/Footer.module.css"
export const Footer = () => {
  return (
    <div className={Style.footer}>
    <div className={Style.left}>
     <h1>One Cart</h1>
     <p>One Cart is your All-in-one shopping destination,offering top-quality products,unbeatable deals,and fast delivery-all backend by trusted service designed to make your life easier every day</p>
    </div>
    <div className={Style.middle}>
     <h1>Company</h1>
     <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
     </ul>
    </div>
    <div className={Style.right}>
    <h1>Get In Touch</h1>
    <ul>
        <li>+91 9000082000</li>
        <li>contact@gmail.com</li>
        <li>+1-123-456-7890</li>
        <li>admin@gmail.com</li>
    </ul>
    </div>
    </div>
  )
}
