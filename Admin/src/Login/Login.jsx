import axios from "axios";
import Style from "../Login/Login.module.css";
import { useContext, useState } from "react";
import { AdminContext } from "../Context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { adminDataContext } from "../Context/AdminContext";
import { toast } from "react-toastify";
function Login() { 
    let {serverUrl}=useContext(AdminContext)
    let naviagte=useNavigate();
    let{adminData,getAdmin}=useContext(adminDataContext)
    const [data, setData] = useState({
    email: "",
    password: "",
    });



  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

 const handlelogin = async () => {
    
  try {
    const res = await axios.post(
      "http://localhost:8080/api/auth/adminlogin",
      data,{withCredentials:true}
    );
   
    console.log(res.data);
    toast.success("Admin Login Successfully")
    getAdmin()
    naviagte("/")
    
  } catch (error) {
    console.log(error.response);
    console.log(error.response.data);
    toast.error("Login Failed")
  }
};

  return (
    <div className={Style.container}>
      <div className={Style.nav}>
        <div className={Style.navleft}>
          <span>OneCart</span>
        </div>
        <div className={Style.navright}></div>
      </div>

      <div className={Style.navdown}>
        <h1>Login Page</h1>
        <p>Welcome to OneCart, Please place your order</p>
      </div>

      <div className={Style.box}>
        <div className={Style.form}>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={data.email}
            onChange={handlechange}
            name="email"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={data.password}
            onChange={handlechange}
            name="password"
          />
          <button onClick={handlelogin}>Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
