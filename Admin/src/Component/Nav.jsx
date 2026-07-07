import { useContext } from "react";
import Style from "../Component/Nav.module.css"
import axios from "axios";
import { AdminContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Nav(){
    let{serverUrl}=useContext(AdminContext)
    let navigate=useNavigate()
        async function logout(){
    try {
        let result=await axios.get(`${serverUrl}/api/auth/logout`,{withCredentials:true})
        console.log(result)
        navigate("/login")
        toast.success("Logout Successfully")
    } catch (error) {
        console.log(error)
    }
        }
    return (
        <>
        <div className={Style.container}>
        <div className={Style.left}>
         <span>One Cart</span>
        </div>
        <div className={Style.right}>
        <button onClick={logout}>Logout</button>
        </div>
        </div>
        </>
    )
}

export default Nav;