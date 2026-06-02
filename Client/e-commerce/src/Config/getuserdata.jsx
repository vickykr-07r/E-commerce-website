import axios from "axios"
import { useContext } from "react"
import { useEffect } from "react"
import { ServerContext } from "../Context/ServerContext"
import { useDispatch } from "react-redux"
import { setUserData } from "../Redux/userSlice"

function GetuserData(){
    const {Serverurl}=useContext(ServerContext)
    const dispatch=useDispatch()
   useEffect(()=>{
    const getcurrentuser=async()=>{
     try {
        const result=await axios.get(`${Serverurl}/api/user/currentuser`,{withCredentials:true})
        dispatch(setUserData(result.data))
     } catch (error) {
       console.log(error) 
     }
    }
    getcurrentuser();
   },[Serverurl])
    return (
        <>
        
        </>
    )
}

export default GetuserData
