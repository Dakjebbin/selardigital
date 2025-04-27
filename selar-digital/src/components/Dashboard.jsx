import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/auth-context";
import { Link } from "react-router-dom";
import { BsFillBarChartFill } from "react-icons/bs";
import { HiCursorClick } from "react-icons/hi";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import "../styles/dash.css";
import { FaUsb } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import axios from "axios"
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import toast from "react-hot-toast";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { userData } = useAuthContext();
  const [transactions, setTransactions] = useState([]);
  const baseUrl = "/api";

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const statusLabels = {
    Success: "Success",
    Failed: "Failed",
    Pending: "Pending",
  };

  const fetchTransactions = async () => {

    try {
      const response = await axios.get(`${baseUrl}/transactions/get-transactionAdmin/${userData._id}`, {
        withCredentials: true,
      })
  
      console.log(response);
      
      setTransactions(response.data.data);
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        toast.error(error?.response?.data);
      } else {
        toast.error("Error:", error);
      }
    }

  }

  useEffect(() => {
    fetchTransactions()
  },[userData?._id]);
  

  

  const profitData = {
    labels: transactions.map((transaction) =>
      formatDate(transaction.createdAt)
    ), // Display transaction date as labels
    datasets: [
      {
        data: transactions
          .filter(
            (transaction) =>
              transaction.type === "Profit" && transaction.status === "Success"
          )
          .map((transaction) => transaction.amount), // Extract profit data
        borderColor: "rgba(203, 141, 57, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color
        tension: 0.1,
      },
      {
        label: "Portfolio",
        data: transactions
          .filter(
            (transaction) =>
              transaction.type === "Deposit" && transaction.status === "Success"
          )
          .map((transaction) => transaction.amount), // Balance amounts (Deposits)
        borderColor: "rgba(54, 162, 235, 1)", // Balance line color
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 1,
        fill: true,
      },
    ],
  };

  // Profit Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  // const handleOnclick = (transaction) => {
  //   navigate(`${userData?.username}/transaction-details/${_id}`, { state: { transaction } });
  // };

 

  const tIcons = {
    Deposit: <ion-icon name="arrow-up-outline"></ion-icon>,
    Withdrawal: <ion-icon name="arrow-down-outline"></ion-icon>,
    Profit: <ion-icon name="add-circle-outline"></ion-icon>,
  };

  return (
    <div>
      {userData && (
        <>
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

      <div className="flex justify-between m-auto md:w-[90%] w-full gap-10 items-center mt-10 flex-col lg:flex-row">
        <div className="shadow-lg shadow-black w-80 h-40 rounded-2xl px-5 py-5">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-semibold">Deposits</p>
            <CiCirclePlus size={30} />
          </div>
          <p className="mt-6 text-2xl">${userData.balance}.00</p>
        </div>

        <div className="shadow-lg shadow-black w-80 h-40 rounded-2xl px-5 py-5">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-semibold">Profits</p>
            <FaArrowRightArrowLeft size={30} />
          </div>
          <p className="mt-6 text-2xl">${userData.profit}.00</p>
        </div>
      </div>

      <div>
        <div className="mt-10">
          {/* <p>Transaction History</p> */}
          <div className="details">
            <div className="cardHeader">
              <h2>Transactions</h2>
              <div className="recentTransact">
                {transactions.length === 0 ? (
                  <p className="noTransact">No Transactions</p>
                ) : (
                  <div className="tableWrapper">
                    {transactions.map((transaction, index) => (
                      <div
                        key={index}
                        className="transaction"
                        // onClick={() => handleOnclick(transaction)}
                      >
                        <div className="p-1">
                          <div className="t-icon">
                            {tIcons[transaction.type]}
                          </div>
                          <div>
                            <h3> {transaction.type} </h3>
                            <p>{formatDate(transaction.createdAt)}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <h2> ${transaction.amount} </h2>
                          <p>
                            <span
                              className={`status ${transaction.status.toLowerCase()}`}
                            >
                              {statusLabels[transaction.status.toLowerCase()] ||
                                transaction.status} 
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="chart-container">
              <h3 className="chart-title">Portfolio Statistics</h3>
              <Line data={profitData} options={options} />
            </div>
            <div className="profit-chart"></div>
          </div>
        </div>
        <div></div>
      </div>
      </>
)}
    </div>
  );
};

export default Dashboard;
