import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineTrendingDown } from "react-icons/md";

const TotalRevenueChart = () => {
  
  const [users, setUsers] = useState([])

  const baseUrl = "/api";
  //  const baseUrl = "http://localhost:8527"
  axios.defaults.withCredentials = true

  useEffect(() => {
      const fetchUsers = async () => {
          try {
              const response = await axios.get(`${baseUrl}/auth/users-client`,{
                  withCredentials: true
              })

              setUsers(response.data.users)
              
          } catch (error) {
              console.error(error)
          }
      }
      fetchUsers()
  })
  return (
    <div className="flex flex-wrap gap-4">
      <div className="border grow basis-[200] border-gray-200 rounded-lg px-4 py-3 shadow-xl shadow-[#e9e7e7]">
        <div className="flex items-center mb-2 text-[#928e8e]">
          <MdPeopleAlt />
          <p className="ml-2">Total Users</p>
        </div>

        <div className="flex items-center justify-between mb-3">
          <p className="text-xl font-semibold "> {users.length}</p>
          <span className="flex items-center">
            <IoMdTrendingUp className="text-green-600" size={30}/>
            <p className="text-sm text-green-600">2.5%</p>
          </span>
        </div>
      </div>

      <div className="border grow basis-[200] border-gray-200 rounded-lg px-4 py-3 shadow-xl shadow-[#e9e7e7]">
        <div className="flex items-center mb-2 text-[#928e8e]">
          <FaInfoCircle />
          <p className="ml-2">Total Revenue</p>
        </div>

        <div className="flex items-center justify-between mb-3">
          <p className="text-xl font-semibold "> $3,465M</p>
          <span className="flex items-center">
            <IoMdTrendingUp className="text-green-600" size={30}/>
            <p className="text-sm text-green-600">0.5%</p>
          </span>
        </div>
      </div>

      <div className="border grow basis-[200] border-gray-200 rounded-lg px-4 py-3 shadow-xl shadow-[#e9e7e7]">
        <div className="flex items-center mb-2 text-[#928e8e]">
          <FaInfoCircle />
          <p className="ml-2">Total Returns</p>
        </div>

        <div className="flex items-center justify-between mb-3">
          <p className="text-xl font-semibold "> 1,789</p>
          <span className="flex items-center">
            <MdOutlineTrendingDown className="text-red-600" size={30}/>
            <p className="text-sm text-red-600">0.12%</p>
          </span>
        </div>
      </div>

      <div className="border grow basis-[200] border-gray-200 rounded-lg px-4 py-3 shadow-xl shadow-[#e9e7e7]">
        <div className="flex items-center mb-2 text-[#928e8e]">
          <FaInfoCircle />
          <p className="ml-2">Total Orders</p>
        </div>

        <div className="flex items-center justify-between mb-3">
          <p className="text-xl font-semibold "> 1,165M</p>
          <span className="flex items-center">
            <IoMdTrendingUp className="text-green-600" size={30}/>
            <p className="text-sm text-green-600">0.12%</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenueChart;
