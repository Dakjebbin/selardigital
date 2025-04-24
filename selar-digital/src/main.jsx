import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layouts/layout.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Login from './auth/Login.jsx'
import Register from './auth/Register.jsx'
import  { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard.jsx'
import AuthContextProvider from './context/auth-context.jsx'
import Courses from "./pages/SidebarCourse.jsx"

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
  },{
    path: "/dashboard",
    element: <Dashboard/>
  },{
    path: "/courses",
    element: <Courses/>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
 <Toaster />
 </AuthContextProvider>
  </StrictMode>,
)
