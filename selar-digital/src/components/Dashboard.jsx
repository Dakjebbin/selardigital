import React, { useState } from 'react'
import { useAuthContext } from '../context/auth-context';
import { Link } from 'react-router-dom';
import "../styles/dash.css"
import { CiCirclePlus } from "react-icons/ci";
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


    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      };

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
            borderColor:  "rgba(203, 141, 57, 1)", // Line color
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color
            tension: 0.1,
          },    {
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
        <div className="trading-view-widget mb-6 px-4 py-2 bg-[#1f1f1f] shadow-md rounded-lg flex items-center justify-between">
  <iframe
    src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_e15f9&symbol=NASDAQ%3AAAPL&interval=60&hidesidetoolbar=1&symboledit=1&saveimage=1&theme=dark"
    width="100%" 
    height="100" 
    allowfullscreen="true"
    title="TradingView Price Ticker"
  ></iframe>
</div>

        <div className='flex justify-between m-auto md:w-[90%] w-full gap-10 items-center mt-10 flex-col lg:flex-row'>
        <div className='shadow-lg shadow-black w-80 h-40 rounded-2xl px-5 py-5'>
            <div className='flex items-center justify-between'>
            <p className='text-3xl font-semibold'>Deposits</p>
           <CiCirclePlus size={30}/>
            </div>
            <p className='mt-6 text-2xl'>$0.00</p>
        </div>
        
        <div className='shadow-lg shadow-black w-80 h-40 rounded-2xl px-5 py-5'>
            <div className='flex items-center justify-between'>
            <p className='text-3xl font-semibold'>Profits</p>
            <FaArrowRightArrowLeft size={30} />
            </div>
            <p className='mt-6 text-2xl'>$0.00</p>
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
                          <div key={index} className="transaction" onClick={() => handleOnclick(transaction)}>
                            <div className="p-1">
                              <div className="t-icon">
                                {tIcons[transaction.type]}
                              </div>
                              <div>
                                <h3> {transaction.type} </h3>
                                <p>{formatDate(transaction.createdAt)}</p>
                              </div>
                            </div>

                            <div className="p-2">
                              <h2> ${transaction.amount} </h2>
                              <p>
                                <span
                                  className={`status ${transaction.status.toLowerCase()}`}
                                >
                                  {statusLabels[
                                    transaction.status.toLowerCase()
                                  ] || transaction.status}
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
    </div>
  )
}

export default Dashboard