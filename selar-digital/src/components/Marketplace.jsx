import React from 'react'
import { useAuthContext } from '../context/auth-context';
import { AiTwotoneDollarCircle } from 'react-icons/ai';
import { FaUsb } from 'react-icons/fa';
import { HiCursorClick } from 'react-icons/hi';
import { BsFillBarChartFill } from 'react-icons/bs';
import AiModelsTable from './Aimodeltables';

const MainMarketplace = () => {
    const { userData } = useAuthContext();
  return (
    <div>
          <div className="text-right text-xl my-3 font-semibold">
          <p>Welcome <span className="text-[#8b7a1a]">Back</span> {userData.username}</p>
        </div>
       <div className="trading-view-widget mb-6 px-4 py-2 bg-[#1f1f1f] shadow-md rounded-lg flex items-center justify-between">
        <iframe
          src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_e15f9&symbol=NASDAQ%3AAAPL&interval=60&hidesidetoolbar=1&symboledit=1&saveimage=1&theme=dark"
          width="100%"
          height="100"
          allowFullScreen={true}
          title="TradingView Price Ticker"
        ></iframe>
      </div>

       <div className="flex flex-wrap gap-3">
        <div className="bg-gradient-to-tr grow basis-[200px] from-[#bebebe] rounded-2xl to-[#ceb318] ">
          <div>

            <div className="flex items-center px-5 py-4">
            <div className="w-8 h-8 mr-3 rounded-full border flex items-center justify-center bg-white">
            <BsFillBarChartFill />
            </div>
            <p className="text-[#202020] text-[18px]">Revenue</p>
            </div>

            <hr />
            <div className="flex justify-between items-center px-5 py-4">
              <p className="text-2xl font-semibold">$24.84K</p>
              <div>
                <p className="text-green-800">+87.3%</p>
                <p>last period</p>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-gradient-to-tr grow basis-[200px] from-[#bebebe] rounded-2xl to-[#ceb318] ">
          <div>

            <div className="flex items-center px-5 py-4">
            <div className="w-8 h-8 mr-3 rounded-full border flex items-center justify-center bg-white">
            <HiCursorClick  />
            </div>
            <p className="text-[#202020] text-[18px]">Clicks</p>
            </div>

            <hr />
            <div className="flex justify-between items-center px-5 py-4">
              <p className="text-2xl font-semibold">7.853</p>
              <div>
                <p className="text-red-600">+44.2%</p>
                <p>last period</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-tr grow basis-[200px] from-[#bebebe] rounded-2xl to-[#ceb318] ">
          <div>

            <div className="flex items-center px-5 py-4">
            <div className="w-8 h-8 mr-3 rounded-full border flex items-center justify-center bg-white">
            <FaUsb />
            </div>
            <p className="text-[#202020] text-[18px]">Referrals</p>
            </div>

            <hr />
            <div className="flex justify-between items-center px-5 py-4">
              <p className="text-2xl font-semibold">54</p>
              <div>
                <p className="text-green-800">+78.9%</p>
                <p>last period</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-tr grow basis-[200px] from-[#bebebe] rounded-2xl to-[#ceb318] ">
          <div>

            <div className="flex items-center px-5 py-4">
            <div className="w-8 h-8 mr-3 rounded-full border flex items-center justify-center bg-white">
            <AiTwotoneDollarCircle  />
            </div>
            <p className="text-[#202020] text-[18px]">Payments</p>
            </div>

            <hr />
            <div className="flex justify-between items-center px-5 py-4">
              <p className="text-2xl font-semibold">$83.302</p>
              <div>
                <p className="text-red-600">+27.5%</p>
                <p>last period</p>
              </div>
            </div>
          </div>
        </div>

        
      </div>

<div>
    <AiModelsTable/>
</div>
    </div>
  )
}

export default MainMarketplace