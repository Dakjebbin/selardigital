import React from 'react'
import { useAuthContext } from '../context/auth-context'
import SalesChart from '../pages/withdrawChart'

const DepositComponent = () => {
    const {userData} = useAuthContext()
  return (
    <div>
         <div className="text-right text-xl my-3 font-semibold">
          <p>Welcome <span className="text-[#8b7a1a]">Back</span> {userData.username}</p>
        </div>

        <div className='mb-5'>
            <SalesChart />
          </div>
       <div>
       <div className="flex justify-center mb-6 text-xl font-semibold ">
              <p className="bg-[#998516] px-4 py-3 rounded-lg">Deposit</p>
            </div>
                <div className="bg-white rounded-xl shadow-lg">
                  <div className="bg-[#998516] flex items-center justify-between p-4 rounded-t-lg">
                    <p className="font-semibold text-lg">Deposit Funds</p>
                    {/* <div onClick={() => setDepositModal(false)}><FaWindowClose size={20} /></div> */}
                  </div>
                 
                  <div className="mt-4 p-4">
                  
                   <form>
                    <div className="flex flex-col mb-3">
                      <label>Enter Amount ($)</label>
                      <input placeholder="$" className="border-2 px-2 w-96  py-1 rounded-md mt-2 border-gray-400" type="number" />
                    </div>

                    <div className="flex flex-col">
                      <label>Select Payment Method</label>
                      <select className="border-2 px-2 w-96 py-1 rounded-md mt-2 border-gray-400" name="" id="">
                        <option value="">Select Payment Method</option>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Eth">Ethereum</option>
                        <option value="USDT">USDT</option>
                      </select>
                    </div>

                    <button className="bg-[#998516] my-3 p-2 font-semibold rounded-2xl">Proceed to Payment</button>
                   </form>
                  </div>
                </div>
              </div>
            
    </div>
  )
}

export default DepositComponent