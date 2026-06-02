import { Routes, Route } from "react-router-dom";
import Register from "./Register/Register.jsx";
import Home from "./Home/Home.jsx";
import Login from "./Login/Login.jsx";
import GetuserData from "./Config/getuserdata.jsx";

function App() {
  
  return (
    <>
    <GetuserData/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </>
  );
}

export default App;
