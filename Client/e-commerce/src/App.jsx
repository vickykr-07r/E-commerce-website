import { Routes, Route } from "react-router-dom";
import Register from "./Register/Register.jsx";
import Home from "./Home/Home.jsx";
import Login from "./Login/Login.jsx";
import GetuserData from "./Config/getuserdata.jsx";
import { About } from "./About/About.jsx";
import { Collections } from "./Collections/Collections.jsx";
import { Order } from "./Order/Order.jsx";
import { Product } from "./Product/Product.jsx";
import { Contact } from "./Contact/Contact.jsx";
import { useSelector } from "react-redux";
import { ProductDetail } from "./Product Detail/ProductDetail.jsx";
import { Cart } from "./Cart/Cart.jsx";
import { PlaceOrder } from "./PlaceOrder/PlaceOrder.jsx";

function App() {
  let { userData } = useSelector((state) => state.user);
  return (
    <>
    <GetuserData/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/collection" element={<Collections />} />
      <Route path="/order" element={<Order />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="/productdetail/:productId" element={<ProductDetail />} />
       <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
    </Routes>
    </>
  );
}

export default App;
