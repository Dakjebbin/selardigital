import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layouts/layout.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Login from './auth/Login.jsx'
import Register from './auth/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
      index: true,
      element: <App/>
      },{
        path: "contactUS",
        element: <ContactUs/>
      },{
        path: "Login",
        element: <Login/>
      },{
        path: "register",
        element: <Register/>
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
