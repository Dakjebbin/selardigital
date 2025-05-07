import { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assest";
import { useAuthContext } from "../context/auth-context";
import { MdDashboard } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import toast from "react-hot-toast";
import { FaAddressBook, FaSpinner } from "react-icons/fa";
import axios from "axios";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import TotalRevenueChart from "./TotalRevenueChart";
import LeadsCard from "./ChartDash";
import { TbWorldWww } from "react-icons/tb";
import { AiFillProduct } from "react-icons/ai";

const Dashboard = () => {
  const { userData } = useAuthContext();
  const [open, setOpen] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [updated, setUpdated] = useState(false);
  const { Id } = useParams();

  const baseUrl = "/api";
  //const baseUrl = "http://localhost:8527";

  axios.defaults.withCredentials = true;

  

  // const handleStatusUpdate = async () => {

  //   try {
  //     const response = await axios.patch(`${baseUrl}/auth/status/${Id}`,{
  //       status
  //     },{
  //       withCredentials: true,
  //     })

  //     if (response.status === 201) {
  //       toast.success("User's status has been updated");

  //     }

  //     setUserDetails((prevStatus) => ({
  //       ...prevStatus,
  //       status: status, // Update only the status
  //     }));
  //   } catch (error) {
  //     if (error instanceof axios.AxiosError) {
  //       toast.error(error?.response?.data);
  //   } else {
  //       toast.error("Error fetching users: ", error.message);
  //   }
  //   }
  // }

  // const handleSignalUpdate = async () => {

  //   try {
  //     setUpdated(true);
  //     const response = await axios.patch(`${baseUrl}/auth/signal/${Id}`,{
  //       signalAvailable
  //     },{
  //       withCredentials: true,
  //     })

  //     if (response.status === 200) {
  //       toast.success("User's Signal Status has been updated");

  //     }

  //     setUserDetails((prevStatus) => ({
  //       ...prevStatus,
  //       signalAvailable, // Update only the status
  //     }));
  //   } catch (error) {
  //     if (error instanceof axios.AxiosError) {
  //       toast.error(error?.response?.data);
  //   } else {
  //       toast.error("Error fetching users: ", error.message);
  //   }
  //   } finally {
  //     setUpdated(false);
  //   }
  // }

  //   useEffect(() => {
  //   const fetchTransaction = async () => {
  //       try {
  //         const response = await axios.get(`${baseUrl}/transactions/get-transactionAdmin/${Id}`,{
  //           withCredentials:true
  //         })

  //         setTransaction(response.data.data)

  //       } catch (error) {
  //         if (error instanceof axios.AxiosError) {
  //           toast.error(error?.response?.data?.message || "Something went wrong" );
  //       } else {
  //           toast.error("Error");
  //       }
  //       }
  //   }

  //   fetchTransaction();

  //   },[Id])

  //     const fetchUserDetails = async () => {
  //         try {
  //             const response = await axios.get(`${baseUrl}/auth/users/${Id}`, { withCredentials: true });
  //             setUserDetails(response.data.user);
  //             setLoading(false);
  //         } catch (error) {
  //             if (error instanceof axios.AxiosError) {
  //                 toast.error(error?.response?.data?.message || "Something went wrong" );
  //             } else {
  //                 toast.error("Error fetching users: ", error.message);
  //             }
  //         }
  //     };

  //     useEffect(() => {
  //         fetchUserDetails();
  //     },
  //  [Id, baseUrl]);

  useEffect(() => {
    // Ensure that userData exists and we can safely check for isAdmin
    if (userData !== null) {
      if (userData.isAdmin !== "ADMIN") {
        toast.error("Unauthorized Access");
        window.location.assign("/");
      } else {
        // If the user is an admin, stop loading
        setLoading(false);
      }
    }
  }, [userData]);

  const handleLogout = async (e) => {
    e.preventDefault();

    setLoggingOut(true);
    try {
      const response = await axios.post(`${baseUrl}/auth/logout`, {
        withCredentials: true,
      });

      if (response?.data.success) {
        toast.success(response?.data?.message);
        window.location.assign("/");
      }
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        toast.error("");
      }
      if (error === 404 || error) {
        const errorMessage = error.message;
        toast.error(errorMessage);
      }
    } finally {
      setLoggingOut(false);
    }
  };

  const menuitems = [
    {
      icons: <MdDashboard size={30} />,
      label: "Dashboard",
      url: "/dashboard",
    },

    {
      icons: <FaUsers size={30} />,
      label: "Manage Users",
      url: "/admin-dashboard",
    },
   
    {
      icons: <TbWorldWww size={30} />,
      label: "Manage Website",
      url: "/manage-website",
    },
    {
      icons: <AiFillProduct size={30} />,
      label: "Manage Products",
      url: "/manage-products",
    },
    {
      icons: <FaAddressBook size={30} />,
      label: "KYC",
      url: "/kyc",
    },
  ];

  const [isNavActive, setIsNavActive] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
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

  if (loading) {
    return <div>Loading User details...</div>;
  }

  return (
    <div className="md:flex">
      {userData && (
        <>
          {/* Sidebar for Desktop */}
          <nav
            className={`shadow-md p-2 bg-[#A69051] hidden flex-col ${
              open ? `w-60` : `w-16`
            } md:flex duration-500 sticky top-0 h-screen`}
          >
            {/* Header */}
            <div className="px-3 py-2 h-20 flex justify-between items-center">
              <img
                src={assets.logo}
                alt="logo"
                className={`${open ? `w-10` : `w-0`} rounded-md`}
              />
              <div>
                <MdOutlineMenuOpen
                  size={34}
                  className={`duration-500 cursor-pointer ${
                    !open && `rotate-180`
                  }`}
                  onClick={() => setOpen(!open)}
                />
              </div>
            </div>

            {/* Body */}
            <ul className="flex-1">
              {menuitems.map((item, index) => (
                <li
                  key={index}
                  className="px-1 py-2 my-2 relative duration-300 flex gap-2 items-center group"
                >
                  <a
                    className=" hover:bg-white rounded-md cursor-pointer pt-1 pl-2 pr-32"
                    href={item.url}
                  >
                    <div>{item.icons}</div>
                    <p
                      className={`${
                        !open && `w-0 translate-x-24`
                      } duration-500 overflow-hidden`}
                    >
                      {item.label}
                    </p>
                  </a>
                  <p
                    className={`${
                      open && "hidden"
                    } absolute left-120 shadow-md rounded-md w-0 p-0 duration-300 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}
                  >
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="flex items-center gap-2 px-3 py-2">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>WW</AvatarFallback>
                </Avatar>
              </div>
              <div
                className={`leading-5 ${
                  !open && `w-0 translate-x-24`
                } duration-500 overflow-hidden`}
              >
                <p className="flex items-center mr-3">{userData?.username}</p>
                <p className="text-xs uppercase">{userData?.email}</p>

                <button
                  onClick={handleLogout}
                  className="flex items-center bg-red-600 rounded-md text-white p-1"
                  disabled={loggingOut}
                >
                  {loggingOut ? (
                    <div className="flex items-center space-x-2 justify-center">
                      <span className="animate-pulse">Logging Out</span>{" "}
                      <FaSpinner className=" animate-spin " />
                    </div>
                  ) : (
                    <div className="flex">
                      <p className="mr-1 font-bold">Logout</p>
                      <IoIosLogOut className="cursor-pointer" size={25} />
                    </div>
                  )}
                </button>
              </div>
            </div>
          </nav>

          {/* Sidebar for Mobile */}
          <div className="md:hidden">
            <div
              className="m-6 cursor-pointer"
              onClick={handleToggle}
              ref={mobileNavRef}
            >
              <MdOutlineMenuOpen size={34} />
            </div>

            <div
              ref={mobileNavRef}
              className={`fixed top-0 right-0 w-64 h-full bg-[#A69051] transform transition-all duration-500 ${
                isNavActive ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="ml-5 mt-4">
                <img src={assets.logo} alt="logo" className="w-14 rounded-md" />
              </div>

              <nav>
                <ul>
                  {menuitems.map((item, index) => (
                    <li
                      key={index}
                      className="p-5 hover:bg-white hover:rounded-md hover:m-2 cursor-pointer"
                    >
                      <a href={item.url}>
                        <div>{item.icons}</div>
                        <p>{item.label}</p>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 pt-4 pl-4">
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>WW</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="leading-5">
                    <p className="flex items-center mr-3">
                      {userData?.username}
                    </p>
                    <p className="text-xs uppercase">{userData?.email}</p>

                    <button
                      onClick={handleLogout}
                      className="flex items-center bg-red-600 rounded-md text-white p-1"
                      disabled={loggingOut}
                    >
                      {loggingOut ? (
                        <div className="flex items-center space-x-2 justify-center">
                          <span className="animate-pulse">Logging Out</span>{" "}
                          <FaSpinner className=" animate-spin " />
                        </div>
                      ) : (
                        <div className="flex">
                          <p className="mr-1 font-bold">Logout</p>
                          <IoIosLogOut className="cursor-pointer" size={25} />
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* Content area */}
          <div
            className={`flex-1 p-5 overflow-auto  md:max-h-screen transition-all duration-500 ${
              open ? "ml-4" : "ml-5"
            }`}
          >
            <div>
              <div>
                <p className="text-xl mb-4 font-semibold">Dashboard</p>

                <div className="gap-4">
                  <TotalRevenueChart />
                  <div className="mt-6 ">
                  <LeadsCard/>
                  </div>
                  {/* <Component/> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
