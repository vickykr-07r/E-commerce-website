import { createContext } from "react"

export const AdminContext=createContext();
function AuthContext({children}){
    let serverUrl = "http://localhost:8080";
    const value={
    serverUrl
    }
    return (
        <AdminContext.Provider value={value}>
        {children}
        </AdminContext.Provider>
    )
}

export default AuthContext