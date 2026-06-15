import React from "react";
import Style from "../About/About.module.css";

import { NewLetterBox } from "../Component/NewLetterBox";
export const About = () => {
  return (
    <div className={Style.container}>
      <div className={Style.heading}>
        <h1>ABOUT US</h1>
      </div>

      <div className={Style.box}>
        <div className={Style.boxleft}>
          <img src="https://tse2.mm.bing.net/th/id/OIP.xqySuknI3NXiB3UQypxAiQHaHa?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        </div>
        <div className={Style.boxright}>
          <p>
            OneCart born for smart, seamless shopping—created to deliver quality
            products, trending styles, and everyday essentials in one place.
            With reliable service, fast delivery, and great value, OneCart makes
            your online shopping experience simple, satisfying, and stress-free.
          </p>
          <p>
            Modern shoppers—combining style, convenience, and affordability.
            Whether it's fashion, essentials, or trends, we bring everything you
            need to one trusted platform with fast delivery, easy returns, and a
            customer-first shopping experience you'll love.
          </p>
          <h1>Our Mission </h1>
          <p>
            Our mission is to redefine online shopping by delivering quality,
            affordability, and convenience. OneCart connects customers with
            trusted products and brands, offering a seamless, customer-focused
            experience that saves time, adds value, and fits every lifestyle and
            need.
          </p>
        </div>
      </div>

      <div className={Style.title}>
       <h1>WHY CHOOSE US</h1>
      </div>

      <div className={Style.explain}>
      <div className={Style.explainleft}>
       <h1>Quality Assurance</h1>
       <p>We guarantee quality through strict checks, reliable sourcing, and a commitment to customer satisfaction always.</p>
      </div>
      <div className={Style.explainmiddle}>
      <h1>Convenience</h1>
       <p>Shop easily with fast delivery, simple navigation, secure checkout, and everything you need in one place.</p>
      </div>
      <div className={Style.explainright}>
       <h1>Exceptional Customer Service</h1>
       <p>Our dedicated support team ensures quick responses, helpful solutions, and a smooth shopping experience every time.</p>
      </div>
      </div>

      <NewLetterBox/>
    </div>
  );
};
