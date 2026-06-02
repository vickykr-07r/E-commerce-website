import axios from "axios"
import Style from "../Login/Login.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { ServerContext } from "../Context/ServerContext.jsx"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../Config/firebase.js"
import { useDispatch } from "react-redux"
import { setUserData } from "../Redux/userSlice.js"
function Login(){
    let {Serverurl}=useContext(ServerContext)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [data,setData]=useState({
        email:"",
        password:""
    })

    const handlechange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handlelogin=async()=>{
        try {
            const result=await axios.post(`${Serverurl}/api/auth/login`,data,{withCredentials:true})
            dispatch(setUserData(result.data))
            setData({...data,
                email:"",
                password:""
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const handlegooglelogin=async()=>{
        try {
            const response=await signInWithPopup(auth,provider)
            let user=response.user
                let name=user.displayName
                let email=user.email
             const result=await axios.post(`${Serverurl}/api/auth/googlelogin`,{name:name,email:email},{withCredentials:true})
             dispatch(setUserData(result.data))
             navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return <div className={Style.container}>

<div className={Style.nav}> 
<div className={Style.navleft}>
<span>OneCart</span>
</div>
<div className={Style.navright}>
    
</div>
</div>

<div className={Style.navdown}>
<h1>Login Page</h1>
<p>Welcome to OneCart, Please place your order</p>
</div>

<div className={Style.box}>
    <div  className={Style.google}>
        <button onClick={handlegooglelogin}><img src="https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png" alt="" />Registration with Google</button>
    </div>

<div className={Style.or}>or</div>

<div className={Style.form}>
<input type="email" placeholder="Enter Your Email" value={data.email} onChange={handlechange} name="email"/>
<input type="password" placeholder="Enter Your Password" value={data.password} onChange={handlechange} name="password"/>
<button onClick={handlelogin}>Create Account</button>
</div>

<div className={Style.navigate}>
<span>You haven't any Account ?  <Link to="/register">Create New Account</Link> </span>
</div>

</div>

</div>
}

export default Login