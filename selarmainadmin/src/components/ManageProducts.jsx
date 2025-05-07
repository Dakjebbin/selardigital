import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageProducts = () => {
    const [minAmount, setMinAmount] = useState(0);
    const [amount, setAmount] = useState(0);

    axios.defaults.withCredentials = true;
    //const baseUrl = "http://localhost:8527";
    const baseUrl = "/api";

    const handleMinAmountUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.patch(
                `${baseUrl}/sales/updateMin`,
                { minAmount },
                { withCredentials: true }
            );

            if (response.status === 200) {
                toast.success("Minimum Amount Updated Successfully");
                setMinAmount(0);
            } else {
                toast.error("Failed to update minimum amount");
            }
        } catch (error) {
            if (error instanceof axios.AxiosError) {
                toast.error(error?.response?.data?.message || "An error occurred");
            } else if (error === 404 || error) {
                const errorMessage = error.message;
                toast.error(errorMessage);
            }
        }
    }

    const fetchMinAmount = async () => {
        try {
            const response = await axios.get(`${baseUrl}/sales/getMinAmount`, { withCredentials: true });
            if (response.status === 200) {
                setAmount(response.data.minAmount);
            } else {
                toast.error("Failed to fetch minimum amount");
            }
        } catch (error) {
            if (error instanceof axios.AxiosError) {
                toast.error(error?.response?.data?.message || "An error occurred");
            } else if (error === 404 || error) {
                const errorMessage = error.message;
                toast.error(errorMessage);
            }
        }
    }

    useEffect(()=>{
        fetchMinAmount();
    },[])
  return (
    <div>
        <div>
            <p className='text-xl font-semibold'>Update Sales Optimizer Minimum Amount</p>

            <form onSubmit={handleMinAmountUpdate}>
                <div className='flex flex-col gap-5 mt-5'>
                    <label className='text-lg'>Minimum Amount</label>
                    <input value={minAmount}
                    onChange={(e) => setMinAmount(e.target.value)}
                    type="number" id='amount' placeholder='Enter Minimum Amount' className='border border-gray-300 px-4 py-2 rounded-md' />
                </div>

                <button type="submit" className='bg-[#A69051] text-white px-6 py-3 rounded-xl font-playfair font-semibold mt-10'>Update</button>
            </form>
        </div>

        <div className='mt-5'>
            <p>Present Minimum Amount:- ${amount}</p>
        </div>

        
    </div>
  )
}

export default ManageProducts