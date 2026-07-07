import {Routes,Route} from "react-router-dom"
import Login from "./Login/Login.jsx"
import { useContext } from "react"
import { adminDataContext } from "./Context/AdminContext.jsx"
import Home from "./Home/Home.jsx"
import { Additem } from "./Add Item/Additem.jsx"
import { List } from "./List item/List.jsx"
import { Order } from "./Order/Order.jsx"
  import { ToastContainer, toast } from 'react-toastify';
import { NotFound } from "./Component/NotFound.jsx"
function App() {
  let {adminData} =useContext(adminDataContext)
  return (
    <>
    <ToastContainer />
    {!adminData ? <Login/> :
   <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/additem" element={<Additem/>}/>
    <Route path="/listitem" element={<List/>}/>
    <Route path="/orderitem" element={<Order/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   }
    </>
  )
}

export default App
