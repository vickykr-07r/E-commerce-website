import Nav from "../Component/Nav.jsx";
import SideBar from "../Component/SideBar.jsx";
import { AdminContext } from "../Context/AuthContext.jsx";
import Style from "../Home/Home.module.css";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
function Home() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  const { serverUrl } = useContext(AdminContext);

  const fetchCounts = async () => {
    try {
      const products = await axios.get(`${serverUrl}/api/product/list`, {
        withCredentials: true,
      });
      setTotalProducts(products.data.length);

      const orders = await axios.get(
        `${serverUrl}/api/order/allorders`,
        { withCredentials: true },
      );
      setTotalOrders(orders.data.length);
    } catch (error) {
      console.log("Failed to fetch counts", error);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  return (
    <>
      <div className={Style.container}>
        <div className={Style.nav}>
          <Nav />
        </div>

        <div className={Style.box}>
          <div className={Style.left}>
            <SideBar />
          </div>
          <div className={Style.right}>
            <div className={Style.heading}>
              <h1>OneCart Admin Panel</h1>
            </div>

            <div className={Style.cards}>
              <div className={Style.card}>
                <h3>Total Products</h3>
                <h1>{totalProducts}</h1>
              </div>

              <div className={Style.card}>
                <h3>Total Orders</h3>
                <h1>{totalOrders}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
