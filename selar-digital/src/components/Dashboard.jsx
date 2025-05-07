import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/auth-context";
import { Link } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";
import { HiCursorClick } from "react-icons/hi";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { VscReferences } from "react-icons/vsc";
import { PiHandWithdrawFill } from "react-icons/pi";
import "../styles/dash.css";
import { FaUsb } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import axios from "axios"
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdAccountBalanceWallet } from "react-icons/md";
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
// import toast from "react-hot-toast";
import DonutChartCard from "./RadioChart";
import TeamProgressCard from "./TeamCharts";

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
  const [depositModal, setDepositModal] = useState(false);
   const baseUrl = "/api";
  //const baseUrl = "http://localhost:8527";
  axios.defaults.withCredentials = true;

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
      
      setTransactions(response.data.data);
      
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMsg = error?.response?.data?.message || "An error occurred";
        (errorMsg);
      } else {
        ("An unexpected error occurred");
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
     

      <div className="flex flex-wrap justify-between m-auto md:w-[90%] w-full gap-10  mt-10 ">
        <div className="shadow-lg grow basis-[200px] shadow-black rounded-2xl px-5 py-5">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">Deposits</p>
            <div onClick={() => setDepositModal(true)}>
            <CiCirclePlus size={20} />
             </div>
          </div>
          <p className="mt-6 text-2xl">${userData.balance}.00</p>
        </div>

        <div className="shadow-lg grow basis-[200px] shadow-black rounded-2xl px-5 py-5">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">Profits</p>
            <FaArrowRightArrowLeft size={20} />
          </div>
          <p className="mt-6 text-2xl">${userData.profit}.00</p>
        </div>

        <div className="shadow-lg grow basis-[200px] shadow-black rounded-2xl px-5 py-5">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">Account Balance</p>
            <MdAccountBalanceWallet size={20} />
          </div>
          <p className="mt-6 text-2xl"> ${((userData?.profit || 0) + (userData?.balance || 0)).toFixed(2)}.00</p>
        </div>

        <div className="shadow-lg grow basis-[200px] shadow-black rounded-2xl px-5 py-5">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">Bonus</p>
            <FaMoneyBillTrendUp size={20} />
          </div>
          <p className="mt-6 text-2xl">${userData.profit}.00</p>
        </div>

        <div className="shadow-lg grow basis-[200px] shadow-black rounded-2xl px-5 py-5">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">Total Withdrawals</p>
            <PiHandWithdrawFill size={20} />
          </div>
          <p className="mt-6 text-2xl">${userData.profit}.00</p>
        </div>

        <div className="shadow-lg grow basis-[200px] shadow-black rounded-2xl px-5 py-5">
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">Referral Bonus</p>
            <VscReferences size={20} />
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

<div className="flex justify-between">
<DonutChartCard/>
<TeamProgressCard/>
</div>
{/* 
     { depositModal && (
       <div className="fixed inset-0 flex items-center justify-center bg-[#00000060] z-50">
                <div className="bg-white rounded-xl shadow-lg">
                  <div className="bg-[#998516] flex items-center justify-between p-4 rounded-t-lg">
                    <p className="font-semibold text-lg">Deposit Funds</p>
                    <div onClick={() => setDepositModal(false)}><FaWindowClose size={20} /></div>
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
            )} */}
    </div>
  );
};

export default Dashboard;
