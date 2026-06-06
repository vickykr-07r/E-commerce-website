import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AuthContext from './Context/AuthContext.jsx'
import {BrowserRouter} from "react-router-dom"
import AdminContext from './Context/AdminContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContext>
      <AdminContext>
    <App />
    </AdminContext>
    </AuthContext>
    </BrowserRouter>
  </StrictMode>,
)
