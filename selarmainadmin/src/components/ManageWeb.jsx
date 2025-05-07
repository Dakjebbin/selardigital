import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ManageWeb = () => {
  const [btcAddress, setBtcAddress] = useState("");
  const [ethAddress, setEthAddress] = useState("");
  const [usdtAddress, setUsdtAddress] = useState("");
  const [walletAddress, setWalletAddress] = useState([]);

  //const baseUrl = "http://localhost:8527";
  axios.defaults.withCredentials = true;
  const baseUrl = "/api"

  const handleWalletUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `${baseUrl}/webUpdate/updateAddress`,
        {
          btcAddress,
          ethAddress,
          usdtAddress,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast.success("Wallet Address Updated Successfully");
        setBtcAddress("");
        setEthAddress("");
        setUsdtAddress("");
      } else {
        toast.error("Failed to update wallet address");
      }
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        toast.error(error?.response?.data?.message || "An error occurred");
      } else if (error === 404 || error) {
        const errorMessage = error.message;
        toast.error(errorMessage);
      }
    }
  };

  
  const fetchWalletAddress = async () => {
    try {
        const response = await axios.get(`${baseUrl}/webUpdate/fetchAddress`,{
          withCredentials: true,
        })

        if (response?.data.success) {
          const data = Array.isArray(response.data.data)
            ? response.data.data[0] 
            : response.data.data;             
          setWalletAddress(data);
        }
        
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMsg = error?.response?.data?.message || "An error occurred";
        toast.error(errorMsg);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  }
    useEffect(() => {
        fetchWalletAddress();
    }, []);
  return (
    <div>
      <div>
        <p className="text-xl font-semibold mb-5">Update Wallet Address</p>
        <form onSubmit={handleWalletUpdate}>
          <div className="flex flex-col">
            <label className="text-lg mb-2">Btc Wallet</label>
            <input
              type="text"
              value={btcAddress}
              className="border px-4 py-2 rounded-lg font-semibold border-gray-200"
              placeholder="Enter new wallet address"
              onChange={(e) => setBtcAddress(e.target.value)}
            />
          </div>

          <div className="flex flex-col mt-5">
            <label className="text-lg">Eth Wallet</label>
            <input
              type="text"
              value={ethAddress}
              className="border px-4 py-2 rounded-lg font-semibold border-gray-200"
              onChange={(e) => setEthAddress(e.target.value)}
              placeholder="Enter new wallet address"
            />
          </div>

          <div className="flex flex-col my-5">
            <label className="text-lg">Usdt Wallet</label>
            <input
              type="text"
              onChange={(e) => setUsdtAddress(e.target.value)}
              value={usdtAddress}
              className="border px-4 py-2 rounded-lg font-semibold border-gray-200"
              placeholder="Enter new wallet address"
            />
          </div>
          <button
            type="submit"
            className="bg-[#A69051] px-3 py-3 rounded-md font-semibold cursor-pointer"
          >
            Update
          </button>
        </form>

      </div>

      <div className="mt-5">
      <p className="text-xl font-semibold mb-5">List of Wallet Address</p>
      <p className="text-lg">Bitcoin Wallet:- {walletAddress.btcAddress}</p>
      <p className="text-lg">Ethereum Wallet:- {walletAddress.ethAddress}</p>
      <p className="text-lg">Usdt Wallet:- {walletAddress.usdtAddress}</p>

      </div>
    </div>
  );
};

export default ManageWeb;
