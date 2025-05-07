import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  { Toaster } from 'react-hot-toast';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthContextProvider from './context/auth-context.jsx';
import ForgotPassowrd from './Pages/ForgotPassword.jsx';
import SidebarCourses from "./components/Sidebar.jsx"
import UserDetails from './components/UserDetails.jsx';
import FundUser from './components/FundUser.jsx';
import Dashboard from './components/Dashboard.jsx';
import ManageWebDash from './components/ManageWebDash.jsx';
import ManageProductDash from './components/ManageProductDash.jsx';
import Kyc from './components/Kyc.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },{
    path: "/forgotPassword",
    element: <ForgotPassowrd/>
  },{
    path: "/admin-dashboard",
    element: <SidebarCourses/>
  },{
    path:"/admin-dashboard/user/:Id",
    element: <UserDetails/>
  },{
    path: "/admin-dashboard/Fund/:Id",
    element: <FundUser/>
  },{
    path: "/dashboard",
    element: <Dashboard/>
  },{
    path: "/manage-website",
    element: <ManageWebDash/>
  },{
    path: "/manage-products",
    element: <ManageProductDash/>
  },{
    path: "/kyc",
    element: <Kyc/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthContextProvider>
    <RouterProvider router={router}/>
    <Toaster />
    </AuthContextProvider>
  </StrictMode>,
)
