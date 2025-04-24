import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './layouts/layout.jsx'
import ContactUs from './pages/ContactUs.jsx'

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
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
