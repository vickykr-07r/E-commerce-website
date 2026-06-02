import Style from "../Component/Nav.module.css"
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
function Nav(){
    return(
        <>
        <div className={Style.nav}>
            <div className={Style.left}>
                <h1>One Cart</h1>
            </div>
            <div className={Style.middle}>
                <ul>
                    <li><button>Home</button></li>
                    <li><button>Collections</button></li>
                    <li><button>About</button></li>
                    <li><button>Contact</button></li>
                </ul>
            </div>
            <div className={Style.right}>
                <span><IoSearchCircleOutline /></span>
                <span><img src="https://thfvnext.bing.com/th/id/OIP.Ut-q376VyCV9Wzwge9i37wAAAA?w=174&h=180&c=7&r=0&o=7&cb=thfvnextfalcon&dpr=1.3&pid=1.7&rm=3" alt="" /></span>
                <span><FaCartPlus /></span>
            </div>
        </div>
        </>
    )
}

export default Nav