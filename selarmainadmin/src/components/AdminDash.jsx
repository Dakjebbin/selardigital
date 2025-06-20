import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/auth-context';
import toast from "react-hot-toast";
import { RxAvatar } from "react-icons/rx";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const AdminDash = () => {
    const { userData } = useAuthContext();
    const [users, setUsers] = useState([]);
    const baseUrl = "/api";
    // const baseUrl = "http://localhost:8527"
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {
        if (userData === null) {
            return; 
        }
      
        if (userData !== null) {
            if (userData.isAdmin !== "ADMIN") {
                toast.error("Unauthorized Access");
                window.location.assign("/"); // Redirect to homepage
            } else {
                // If the user is an admin, stop loading and fetch users
                setLoading(false);
                handleAllUsers();
            }
        }
    }, [userData]); 

    const handleAllUsers = async () => {
        try {   
            const response = await axios.get(`${baseUrl}/auth/users`, { withCredentials: true });
            setUsers(response.data.users);
          if(userData.isAdmin !== "ADMIN") {
            toast.error("Unauthorized Access");
            window.location.assign("/"); // Redirect to homepage
          }
        } catch (error) {
            if (error instanceof axios.AxiosError) {
                toast.error(error?.response?.data);
            } else {
                toast.error("Error fetching users: ", error.message);
            }
        }
    }
    
    const handleDeleteUser = async (id) => {
            try {
                const response = await axios.delete(`${baseUrl}/auth/delete-user/${id}`, { withCredentials: true });

                if (response.status === 200) {
                    toast.success("User deleted successfully");
                    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
                }
            } catch (error) {
                if (error instanceof axios.AxiosError) {
                    toast.error(error?.response?.data?.message || "An error occurred");
                }else {
                    toast.error("Error deleting user: ");
                }
            }
    }

    // If loading is true, show a loading spinner
    if (loading) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            {userData && (
                <div>       
            <h2 className="text-center font-bold text-2xl my-7">Welcome, Admin!</h2>
            <h3 className="text-center font-playfair font-bold text-2xl">All users</h3>

            {users.length === 0 ? (
                <span>No Users Found</span>
            ) : (
                <div className="flex mt-10 gap-6 flex-wrap">
                    {users.map((user) => (
                        <div key={user._id} className="bg-[#A69051] flex-grow basis-80">
                            <div className='flex justify-end m-3 '>
                            <MdDelete onClick={() => handleDeleteUser(user._id)} className='cursor-pointer' size={20} />

                            </div>
                            <div className="flex gap-10 items-center ml-10 my-14">
                                <RxAvatar size={52} />
                                <p className="text-2xl font-bold">User Profile</p>
                            </div>

                            <div className="bg-white p-7 rounded-lg">
                                <p className="mb-2 font-playfair font-semibold uppercase">UserName: {user.username}</p>
                                <p className="mb-2 font-playfair font-semibold">Email: {user.email}</p>
                            </div>

                            <span className="flex justify-between mx-3 my-10">
                                <button 
                                className="bg-[white] px-6 py-3 rounded-xl font-playfair font-semibold"
                                onClick={() => navigate(`user/${user._id}`)}>
                                    More Info</button>
                                <button 
                                onClick={() => navigate(`Fund/${user._id}`)}
                                className="bg-[black] text-white px-6 py-3 rounded-xl font-playfair font-semibold">Transactions</button>
                            </span>
                        </div>
                    ))}
                </div>
            )}
              </div>
        )}
        </div>
    );
};

export default AdminDash;
