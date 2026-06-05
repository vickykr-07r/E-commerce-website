import { FaCircle } from "react-icons/fa";
import Style from "../Component/Hero.module.css"
function Hero({heroData,heroCount,setHeroCount}){
    return (
        <>
        <div className={Style.ss}>
        <div className={Style.p1}>
            <p>{heroData[heroCount].text1}</p>
         <p>{heroData[heroCount].text2}</p>
        </div>
        <div className={Style.circle}>
         <FaCircle onClick={()=>{setHeroCount(0)}}  className={heroCount === 0 ? Style.active : Style.circle1}/>
         <FaCircle onClick={()=>{setHeroCount(1)}}  className={heroCount === 1 ? Style.active : Style.circle1}/>
         <FaCircle onClick={()=>{setHeroCount(2)}}  className={heroCount === 2 ? Style.active : Style.circle1}/>
         <FaCircle onClick={()=>{setHeroCount(3)}}  className={heroCount === 3 ? Style.active : Style.circle1}/>
        </div>
        </div>
        
        </>
    )
}

export default Hero