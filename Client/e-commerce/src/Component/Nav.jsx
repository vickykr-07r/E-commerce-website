import Style from "../Component/Nav.module.css";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { ServerContext } from "../Context/ServerContext.jsx";
import { setUserData } from "../Redux/userSlice";
function Nav() {
    let {Serverurl}=useContext(ServerContext)
    const navigate=useNavigate();
  let { userData } = useSelector((state) => state.user);
  let dispatch=useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile,setShowProfile] = useState(false);
  const handleLogout=async()=>{
    try {
        const result=await axios.get(`${Serverurl}/api/auth/logout`,{withCredentials:true})
        dispatch(setUserData(null))
        navigate("/register")

    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
      <div className={Style.nav}>
        <div className={Style.left}>
          <h1>One Cart</h1>
        </div>
        <div className={Style.middle}>
          <ul>
            <li>
              <button
                onClick={() => {
                  console.log(userData);
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button>Collections</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </div>
        <div className={Style.right}>
          <span onClick={()=>{setShowSearch((prev)=>!prev)}}>
            <IoSearchCircleOutline />
          </span>
          {userData ? (
            <div className={Style.profilechar} onClick={() => setShowProfile(prev => !prev)}>
              {userData?.name?.charAt(0).toUpperCase()}
            </div>
          ) : (
            <span onClick={() => setShowProfile(prev => !prev)}>
              <img
                src="https://thfvnext.bing.com/th/id/OIP.Ut-q376VyCV9Wzwge9i37wAAAA?w=174&h=180&c=7&r=0&o=7&cb=thfvnextfalcon&dpr=1.3&pid=1.7&rm=3"
                alt=""
              />
            </span>
          )}

          <span>
            <FaCartPlus />
          </span>
        </div>
      </div>
      {showSearch &&
      <div className={Style.search}>
        <input type="text" placeholder="Search Here.." />
      </div>
      }
      {showProfile &&
      <div className={Style.showProfile}>
       <ul>
        {!userData && <li onClick={()=>{navigate("/login")}}>Login</li>}
        
        {userData && <li onClick={handleLogout}>Logout</li>}
        <li>Orders</li>
        <li>About</li>
       </ul>
      </div>
      }
    </>
  );
}

export default Nav;
