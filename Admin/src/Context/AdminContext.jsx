import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AdminContext } from "./AuthContext.jsx";

export const adminDataContext = createContext();

function Admincontext({ children }) {
  const [adminData, setAdminData] = useState(null);

  const { serverUrl } = useContext(AdminContext);
  
  const getAdmin = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/getadmin`, {
        withCredentials: true,
      });

      setAdminData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
      console.log(error.response?.data);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <adminDataContext.Provider value={{ adminData, setAdminData, getAdmin }}>
      {children}
    </adminDataContext.Provider>
  );
}

export default Admincontext;
