import {Routes,Route} from "react-router-dom"
import Login from "./Login/Login.jsx"
function App() {
  return (
    <>
   <Routes>
    <Route path="/login" element={<Login/>}/>
   </Routes>
    </>
  )
}

export default App
