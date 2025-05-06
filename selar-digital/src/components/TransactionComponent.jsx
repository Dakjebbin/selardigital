import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../context/auth-context';

const TransactionComponent = () => {
    const [transactions, setTransactions] = useState([]);

    const {userData} = useAuthContext()

 const baseUrl = "/api";
 // const baseUrl = "http://localhost:8527";
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


  const tIcons = {
    Deposit: <ion-icon name="arrow-up-outline"></ion-icon>,
    Withdrawal: <ion-icon name="arrow-down-outline"></ion-icon>,
    Profit: <ion-icon name="add-circle-outline"></ion-icon>,
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


//     labels: transactions.map((transaction) =>
//       formatDate(transaction.createdAt)
//     ), // Display transaction date as labels
//     datasets: [
//       {
//         data: transactions
//           .filter(
//             (transaction) =>
//               transaction.type === "Profit" && transaction.status === "Success"
//           )
//           .map((transaction) => transaction.amount), // Extract profit data
//         borderColor: "rgba(203, 141, 57, 1)", // Line color
//         backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color
//         tension: 0.1,
//       },
//       {
//         label: "Portfolio",
//         data: transactions
//           .filter(
//             (transaction) =>
//               transaction.type === "Deposit" && transaction.status === "Success"
//           )
//           .map((transaction) => transaction.amount), // Balance amounts (Deposits)
//         borderColor: "rgba(54, 162, 235, 1)", // Balance line color
//         backgroundColor: "rgba(54, 162, 235, 0.2)",
//         tension: 1,
//         fill: true,
//       },
//     ],
//   };
  
  return (
    <div>
         <div className="text-right text-xl my-3 font-semibold">
          <p>Welcome <span className="text-[#8b7a1a]">Back</span> {userData.username}</p>
        </div>
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
  </div></div>
  )
}

export default TransactionComponent