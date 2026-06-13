import { useEffect, useState } from "react";
import Background from "../Component/Background.jsx"
import Hero from "../Component/Hero.jsx"
import Nav from "../Component/Nav.jsx"
import Style from "../Home/Home.module.css"
import { LatestCollection } from "../Component/LatestCollection.jsx";
import { BestSeller } from "../Component/BestSeller.jsx";
import { Policy } from "../Our Policy/Policy.jsx";
import { NewLetterBox } from "../Component/NewLetterBox.jsx";
import { Footer } from "../Component/Footer.jsx";
function Home(){
   let heroData = [
  {
    text1: "30% OFF Limited Offer",
    text2: "Style that"
  },
  {
    text1: "Discover the Best of Bold Fashion",
    text2: "Limited Time Only!"
  },
  {
    text1: "Explore Our Best Collection",
    text2: "Shop Now!"
  },
  {
    text1: "Choose your Perfect Fasion Fit",
    text2: "Now on Sale!"
  }
];

let [heroCount,setHeroCount]=useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setHeroCount((prev) => (prev + 1) % 4);
  }, 3000);

  return () => clearInterval(interval);
}, []);
   return (
<div className={Style.container}>
  <Nav />
  <div className={Style.heroSection}>
    <Hero
      heroData={heroData}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
    />

    <Background heroCount={heroCount} />
  </div>

  <LatestCollection/>
  <BestSeller/>
  <Policy/>
  <NewLetterBox/>
  <Footer/>
</div>

   )
    
}

export default Home