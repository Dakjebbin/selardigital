import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
// import cus1 from "../assets/customer01.jpg";
// import logo1 from "../assets/logosmall.png";
// import xmark from "../assets/xmark.svg";
// import "../style/dash.css";
//import { toast } from "react-toastify";
import toast from 'react-hot-toast';
import axios from "axios";
import { useAuthContext } from "../context/auth-context";
import { assets } from "../assets/assest";

function Deposit() {
  const [isNavActive, setNavActive] = useState(false);
  const [plan, setPlan] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  
  
 const { userData } = useAuthContext();

//   useEffect(() => {
//     if (!userData) {
//       toast.error("Please Login");
//       navigate("/");  // Redirect to login page if user is not authenticated
//     }
//   }, [userData, navigate]);
 

  // Toggle navigation menu
  const toggleNavigation = () => {
    setNavActive(!isNavActive);
  };

  // Close navigation menu
  const closeNavigation = () => {
    setNavActive(false);
  };


  // Handle plan selection change
  const handlePlanChange = (e) => {
    const selectedPlan = e.target.value;
    let selectedAmount = "";

    switch (selectedPlan) {
      case "Starter":
        selectedAmount = "100";
        break;
      case "Regular":
        selectedAmount = "500";
        break;
      case "Premium":
        selectedAmount = "2500";
        break;
      case "Classic":
        selectedAmount = "5500";
        break;
      default:
        selectedAmount = "";
        break;
    }

    setAmount(selectedAmount);
    setPlan(selectedPlan);
  };
  
const baseUrl = import.meta.env.VITE_BASEURL;
axios.defaults.withCredentials = true

  const handleFunding = async (e) => {
    e.preventDefault();

    if (!plan || !amount) {
      toast.error("Please select a plan and amount");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/user/fund`, {
        plan, amount
      }, {
        withCredentials: true,
      })

      console.log(response);
      
  
      if (response.status === 201)  {
        toast.success("Funding Process Initialized")
        navigate("/user/fund/payment", {state: {amount, plan}})
      } else{
        toast.error("An error occurred. Please try again");
       
      }
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        console.log(
           error?.response?.data
         );
       } else {
         console.log("reg error => ", error);
       }
    }   
  }

  
const handleLogout = async () => {
  try {
    const response = await axios.post(`${baseUrl}/auth/logout`, {
      withCredentials: true,
    })

    if (response.status === 200) {
      toast.success("Logout successful");
      window.location.assign("/") 
    } else{
      toast.error("An error occurred. Please try again");
    }
  } catch (error) {
    if (error instanceof axios.AxiosError) {
      console.log(
         error?.response?.data
       );
     } else {
       console.log("reg error => ", error);
     }
  }
}

  return (
    <>
    
    <div className="container">
    
        <div className={`navigation ${isNavActive ? "active" : ""}`}>
          <div className="navbar">
            <img className="logo1" src={assets.logo} alt="logo" />
            <img
              className="xmark"
            //   src={xmark}
              alt="logo"
              onClick={closeNavigation}
            />
          </div>

          <ul>
            <li>
              <Link to={"/user"}>
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to={"/user/withdrawals"}>
                <span className="icon">
                  <ion-icon name="wallet-outline"></ion-icon>
                </span>
                <span className="title">Withdrawals</span>
              </Link>
            </li>
            <li>
              <Link to={"/user/"}>
                <span className="icon">
                  <ion-icon name="stats-chart-outline"></ion-icon>
                </span>
                <span className="title">Transactions</span>
              </Link>
            </li>
            <li>
              <Link to={"/user"}>
                <span className="icon">
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
                <span className="title">Settings</span>
              </Link>
            </li>
            <li>
              <Link onClick={handleLogout}>
                <span className="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span className="title">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>

      <div className={`main ${isNavActive ? "active" : ""}`}>
        <div className="topbar">
          <div className="toggle" onClick={toggleNavigation}>
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="black"><path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/></svg>
          </div>
        
          <div className="user1">
              <p>Welcome  {userData ? userData.fname : "User"}</p>
              <div className="user">
                {/* <img src={cus1} alt="profile-photo" /> */}
              </div>
              </div>
        </div>

        <div className="tab">
          <div className="bank">
            <div className="text5">
              <h2>Fund Account</h2>
            </div>

            <form onSubmit={handleFunding}>
              <label htmlFor="plan">Plan</label>
              <br />
              <select id="plan" value={plan} onChange={handlePlanChange}>
                <option value="Select Plan">Select Plan</option>
                <option value="Starter">Starter</option>
                <option value="Regular">Regular</option>
                <option value="Premium">Premium</option>
                <option value="Classic">Classic</option>
              </select>
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                value={amount}
                readOnly
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <button type="submit" className="go">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  
  </>
  );
}

export default Deposit;
