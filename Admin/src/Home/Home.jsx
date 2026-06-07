
import Nav from "../Component/Nav.jsx";
import SideBar from "../Component/SideBar.jsx";
import Style from "../Home/Home.module.css"
import { useContext } from "react";
function Home(){
    
    return (
        <>
        <div className={Style.container}>

         <div className={Style.nav}>
         <Nav/>
         </div>

         <div className={Style.box}>
          <SideBar/>
         </div>

        </div>
        </>
    )
}

export default Home;