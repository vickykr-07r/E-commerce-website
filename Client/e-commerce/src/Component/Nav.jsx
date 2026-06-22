import Style from "../Component/Nav.module.css";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ServerContext } from "../Context/ServerContext.jsx";
import { setUserData } from "../Redux/userSlice";
import { shopDataContext } from "../Context/ShopContext.jsx";
function Nav() {
  let { Serverurl } = useContext(ServerContext);
  const navigate = useNavigate();
  let { userData } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  
  const [showProfile, setShowProfile] = useState(false);
  let{search,setShowSearch,setSearch,showSearch}=useContext(shopDataContext)
  const handleLogout = async () => {
    try {
      const result = await axios.get(`${Serverurl}/api/auth/logout`, {
        withCredentials: true,
      });
      dispatch(setUserData(null));
      navigate("/register");
    } catch (error) {
      console.log(error);
    }
  };
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
                  navigate("/");
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button onClick={() => {
                  navigate("/collection");
                }}>Collections</button>
            </li>
            <li>
              <button onClick={() => {
                  navigate("/about");
                }}>About</button>
            </li>
            <li>
              <button onClick={() => {
                  navigate("/contact");
                }}>Contact</button>
            </li>
          </ul>
        </div>

        <div className={Style.right}>
          <span
            onClick={() => {
              setShowSearch((prev) => !prev);
              navigate("/collection")
            }}
          >
            <IoSearchCircleOutline />
          </span>
          {userData ? (
            <div
              className={Style.profilechar}
              onClick={() => setShowProfile((prev) => !prev)}
            >
              {userData?.name?.charAt(0).toUpperCase()}
            </div>
          ) : (
            <span onClick={() => setShowProfile((prev) => !prev)}>
              <img
                src="https://thfvnext.bing.com/th/id/OIP.Ut-q376VyCV9Wzwge9i37wAAAA?w=174&h=180&c=7&r=0&o=7&cb=thfvnextfalcon&dpr=1.3&pid=1.7&rm=3"
                alt=""
              />
            </span>
          )}

          <span>
            <FaCartPlus onClick={()=>{navigate("/cart")}}/>
          </span>
        </div>

      </div>

      {showSearch && (
        <div className={Style.search}>
          <input type="text" placeholder="Search Here.." value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
      )}

      {showProfile && (
        <div className={Style.showProfile}>
          <ul>
            {!userData && (
              <li
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </li>
            )}

            {userData && <li onClick={handleLogout}>Logout</li>}
            <li>Orders</li>
            <li>About</li>
          </ul>
        </div>
      )}

    </>
  );
}

export default Nav;
