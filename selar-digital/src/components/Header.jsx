// import React from 'react'
// import { GiHamburgerMenu } from "react-icons/gi";
// const Header = () => {
//   return (
//     <header className='flex justify-between items-center mx-10'>
//         <div className='w-32'>
//             <img className='w-full' src="/selar-white.jpg" alt="" />
//         </div>

//         <nav>
//             <ul className='flex'>
//                 <li className='mr-6 text-xl font-semibold'>Home</li>
//                 <li className='mr-6 text-xl font-semibold'>About Us</li>
//                 <li className='mr-6 text-xl font-semibold'>Products</li>
//                 <li className='mr-6 text-xl font-semibold'>Contact Us</li>
//             </ul>
//         </nav>

//         <div>
//             <button className='bg-[#23325A] px-4 py-2 mr-6 hover:bg-red-600  text-white rounded-xl'>Login</button>
//             <button className='bg-[#d9bad7] px-4 py-2 mr-6 hover:bg-red-600  text-white rounded-xl'>Sign Up</button>
//         </div>

//         {/* Mobile view */}

        
//     </header>
//   )
// }

// export default Header




import "../styles/navbar.css"
import { Link } from 'react-router-dom'
// import { assets } from "../assets/assest"
import { useEffect, useRef, useState } from "react"
import { assets } from "../assets/assest";



const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const mobileNavRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
          setIsNavActive(false);
        }
      };
  
      // Add event listener
      document.addEventListener("mousedown", handleClickOutside);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleToggle = () => {
      setIsNavActive(!isNavActive);
    };
  return (

    <header className="bg-[#e9e7e7]">
      <div className="header">
        <div className='w-32'>
          <Link to="/">
        <img className='w-full' src={assets.logo} alt="Logo" />
        </Link>
        </div> 


        <nav className="hidden lg:block">
          <ul className="navbar">
          <li>
      <Link to="/" onClick={() => scrollX(0,0)}>Home</Link>
           </li>

            <li>
              <a href="#products">Products</a>
            </li>

            <li>
              <a href="#about_us">About Us</a>
            </li>

            <li>
            <Link to="/contactUs" onClick={() => scrollX(0,0)}>
             Contact Us
             </Link>
            </li>
          </ul>
        </nav>


        <div className="hidden lg:block  ">
        <Link to="/login"  onClick={() => scrollX(0,0)}>
           <button className='bg-[#23325A] px-4 mr-6 py-2 hover:bg-red-600  text-white rounded-xl'>Login</button>
           </Link>

           <Link to="/register"  onClick={() => scrollX(0,0)}>
             <button className='bg-[black] px-4 py-2 hover:bg-red-600  text-white rounded-xl'>Sign Up</button>
             </Link>
         </div>


        <img className="block lg:hidden" src={assets.menu_button} alt="" onClick={handleToggle} />
        </div>

        {/* My mobile view starts here */}  

        <nav ref={mobileNavRef} className={`mobile-view ${isNavActive ? "active" : ""}`}>

          <div className="close-button">
            <img src={assets.close_btn} alt="" onClick={handleToggle} />
          </div>
          <ul className="navbar-mobile">
                <li>
            <Link to="/" id="home" onClick={handleToggle}>Home</Link>
          </li>

            <li>
              <a href="#products" onClick={handleToggle}>Products</a>
            </li>

            <li>
              <a href="#about_us" onClick={handleToggle}>About Us</a>
            </li>

            <li>
              <a href="/contactUs">Contact Us</a>
            </li>
          </ul>

<div className="flex justify-between mx-5 pt-10 ">
             <div className="">
          <Link to="/login" onClick={() => scrollX(0,0)}>
   <button className="bg-white px-5 py-1 rounded-xl" >
Login
   </button>
   </Link>
        </div>

        <div>
          <Link to="/register" onClick={() => scrollX(0,0)}>
   <button className="bg-white px-5 py-1 rounded-xl" >
Register
   </button>
   </Link>
        </div>
        </div>
        </nav>
        
    </header>
  )
}

export default Header
