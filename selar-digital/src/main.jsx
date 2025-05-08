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
import Withdraw from './components/Withdraw.jsx'
import SidebarWithdraw from './pages/SidebarWithdraw.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import Kyc from './pages/Kyc.jsx'
import TermsConditions from './components/Terms.jsx'
import Marketplace from './pages/MarketPlaceDash.jsx'
import DepositDash from './pages/DepositDash.jsx'
import TransactionDash from './pages/TransactionDash.jsx'
import ProductsDash from './pages/ProductsDash.jsx'

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
      },{
        path: "forgotPassword",
        element: <ForgotPassword/>
      },{
        path: "terms",
        element: <TermsConditions/>
      }
    ]
  },{
    path: "/dashboard",
    element: <Dashboard/>
  },{
    path: "/courses",
    element: <Courses/>
  },{
    path: "/Withdraw",
    element: <SidebarWithdraw/>
  },{
    path: "/kyc",
    element: <Kyc/>
  },{
    path: "/marketplace",
    element: <Marketplace/>
  },{
    path: "/deposits",
    element: <DepositDash/>
  },{
    path: "/transaction",
    element: <TransactionDash/>
  },{
    path: "/products",
    element: <ProductsDash/>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
 <Toaster
   position="top-center"
   toastOptions={{
     style: {
       fontSize: '18px',
       padding: '25px 34px',
       maxWidth: '500px',
     },
   }}
   containerStyle={{
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     position: 'fixed',
     zIndex: 9999,
   }}
 />
 </AuthContextProvider>
  </StrictMode>,
)
