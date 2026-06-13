import React, { useState } from 'react'
import Style from "../Component/NewLetterBox.module.css"
export const NewLetterBox = () => {
    let [email,setEmail]=useState("");
  return (
    <div className={Style.Container}>
        <div className={Style.heading}>
         <h1>Subsribe Now And Get 20% Off</h1>
         <p>Subscribe now and enjoy exclusive savings, special deals and early access to new collections</p>
        </div>

        <div className={Style.form}>
        <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <button>Subsribe</button>
        </div>

    </div>
  )
}
