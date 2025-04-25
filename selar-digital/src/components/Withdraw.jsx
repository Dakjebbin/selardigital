import React from 'react'
import SalesChart from '../pages/withdrawChart'
import { useAuthContext } from '../context/auth-context';

const Withdraw = () => {
    const { userData } = useAuthContext();
  return (
    <div>
        {userData && (
            <>
        <div className="text-right text-xl my-3 font-semibold">
          <p>Welcome <span className="text-[#8b7a1a]">Back</span> {userData.username}</p>
        </div>
        <div>
            <SalesChart/>
        </div>

        <div className='  shadow-xl shadow-[#7e7d7d] mt-10 rounded-2xl px-10 py-5'>
            <div className='flex justify-center mt-6 text-xl font-semibold '>
            <p className='bg-[#8a7e5e] px-4 py-3 rounded-lg'>Withdrawal</p>
            </div>
            <p className='text-xl mt-8'>Available balance: ${userData.balance}</p>

            <form>
                <div className='flex flex-col mt-7'>
                <label>Enter Amount you Want to withdraw</label>
                <input type="number" className='border-2 border-black rounded-lg h-10 md:w-[50%] w-full px-3 mt-3' placeholder='Enter Amount' />
                </div>

                <div className='flex flex-col mt-7'>
                <label>Choose Payment Channel</label>
                <select name="" id="" className='border-2 border-black rounded-lg h-10 md:w-[50%] w-full  px-3 mt-3'>
                    <option value="">Select Payment Channel</option>
                    <option value="">PayPal</option>
                    <option value="">BTC Wallet Address</option>
                    <option value="">Bank Transfer</option>
                    <option value="">CashApp</option>
                </select>
                </div>

                <div className='flex flex-col mt-7'>
                <label>Enter Payment details</label>
                <input type="text" className='border-2 border-black rounded-lg h-10 md:w-[50%] w-full  px-3 mt-3' placeholder='Enter Payment Details' />
                </div>

            <div className=' flex my-6'>
                <button className='bg-[#A69051] shadow-md shadow-black cursor-pointer text-lg rounded-md hover:bg-[#473e26] px-3 py-2'>Withdraw</button>
                </div>
            </form>
           
        </div>
        </>
        )}
    </div>
  )
}

export default Withdraw