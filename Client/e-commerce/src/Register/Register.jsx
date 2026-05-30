import { Link } from "react-router-dom"
import Style from "../Register/Register.module.css"
function Register(){
return <div className={Style.container}>

<div className={Style.nav}> 
<div className={Style.navleft}>
<span>OneCart</span>
</div>
<div className={Style.navright}>
    
</div>
</div>

<div className={Style.navdown}>
<h1>Registration Page</h1>
<p>Welcome to OneCart, Please place your order</p>
</div>

<div className={Style.box}>
    <div  className={Style.google}>
        <button><img src="https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png" alt="" />Registration with Google</button>
    </div>

<div className={Style.or}>or</div>

<div className={Style.form}>
<input type="text" placeholder="Enter Your Name"/>
<input type="email" placeholder="Enter Your Email"/>
<input type="password" placeholder="Enter Your Password"/>
<button>Create Account</button>
</div>

<div className={Style.navigate}>
<span>You have any Account ?  <Link to="/login">Login</Link> </span>
</div>

</div>

</div>
}

export default Register