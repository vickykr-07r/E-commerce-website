import { useNavigate } from "react-router-dom"
import Style from "../Component/SideBar.module.css"
import { IoAddCircleSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
function SideBar(){
    let navigate=useNavigate();
    return (
        <>
        <div className={Style.sidebar}>
        <div className={Style.additem}>
            <span onClick={()=>{navigate("/additem")}}><IoAddCircleSharp />Add Item </span>
        </div>
       <div className={Style.listitem}>
            <span onClick={()=>{navigate("/listitem")}}><FaThList />List Item </span>
        </div>
        <div className={Style.orderitem}>
            <span onClick={()=>{navigate("/orderitem")}}><SiTicktick />Order Item </span>
        </div>
        </div>
        </>
    )
}

export default SideBar