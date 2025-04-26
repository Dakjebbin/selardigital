import React, { useEffect, useState } from "react";
import SalesChart from "../pages/withdrawChart";
import { useAuthContext } from "../context/auth-context";
import axios from "axios";
import toast from "react-hot-toast";
import PinModal from "./PinModal";

const Withdraw = () => {
  const [amount, setAmount] = useState(0);
  const [paymentChannel, setPaymentChannel] = useState("");
  const [paymentDetail, setPaymentDetail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [setWithdrawalPending] = useState(false);
  const [balance, setBalance] = useState(0);
  const { userData } = useAuthContext();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  axios.defaults.withCredentials = true;

  useEffect(() => {
    if (userData) {
      // Calculate the balance by adding userData.balance and userData.profit
      const totalBalance = userData.balance + userData.profit;
      setBalance(totalBalance);
    }
  }, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if payment details and amount are entered
    if (!paymentDetail || !amount) {
      toast.error("Please enter payment details and amount");
      return;
    }

    // Validate amount (ensure it’s a positive number)
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      toast.error("Please enter a valid amount greater than zero.");
      return;
    }

    // Check if user data has email
    if (!userData.email) {
      toast.error("User email not found. Please log in.");
      return;
    }

    //Ensure the withdrawal amount doesn’t exceed available balance
    if (amountValue > balance) {
        toast.error('Withdrawal amount exceeds available balance.');
        return;
    }

    setShowModal(true); // Show the modal when submitting
  };

  const handlePinVerified = async (pin) => {
    setShowModal(false); // Close the modal after pin is verified

    try {
      // Send withdrawal request
      const response = await axios.post(
        `${baseUrl}/userFund/withdraw`,
        { amount, paymentDetail, pin },
        { withCredentials: true }
      );

      // Assuming the response indicates success
      if (response.status === 200) {
        toast.success("Withdrawal successful");
        setAmount(0);
        setPaymentDetail("");
        setPaymentChannel("");
      } else {
        toast.error("Error processing withdrawal. Please try again later.");
      }
    } catch (error) {
        if (error.response) {
            
            toast.error(`Error: ${error.response.data.message || 'An error occurred during the withdrawal process.'}`);
          } else if (error.request) {
            // The request was made, but no response was received
            toast.error("No response received from server. Please check your connection or try again later.");
          } else {
            // Something else triggered the error
            toast.error(`Error: ${error.message || 'An unknown error occurred.'}`);
          }
    } finally {
      setWithdrawalPending(false); // Ensure pending state is reset
    }
  };
  return (
    <div>
      {userData && (
        <>
          <div className="text-right text-xl my-3 font-semibold">
            <p>
              Welcome <span className="text-[#8b7a1a]">Back</span>{" "}
              {userData.username}
            </p>
          </div>
          <div>
            <SalesChart />
          </div>

          <div className="  shadow-xl shadow-[#7e7d7d] mt-10 rounded-2xl px-10 py-5">
            <div className="flex justify-center mt-6 text-xl font-semibold ">
              <p className="bg-[#8a7e5e] px-4 py-3 rounded-lg">Withdrawal</p>
            </div>
            <p className="text-xl mt-8">
              Available balance: ${balance}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mt-7">
                <label>Enter Amount you Want to withdraw</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="border-2 border-black rounded-lg h-10 md:w-[50%] w-full px-3 mt-3"
                  placeholder="Enter Amount"
                  min="1"
                // max={balance}
                required
                />
              </div>

              <div className="flex flex-col mt-7">
                <label>Choose Payment Channel</label>
                <select
                  value={paymentChannel}
                  onChange={(e) => setPaymentChannel(e.target.value)}
                  name=""
                  id="paymentChannel"
                  required
                  className="border-2 border-black rounded-lg h-10 md:w-[50%] w-full  px-3 mt-3"
                >
                  <option value="">Select Payment Channel</option>
                  <option value="paypal">PayPal</option>
                  <option value="btc">BTC Wallet Address</option>
                  <option value="bank transfer">Bank Transfer</option>
                  <option value="cashapp">CashApp</option>
                </select>
              </div>

              <div className="flex flex-col mt-7">
                <label>Enter Payment details</label>
                <input
                  type="text"
                  value={paymentDetail}
                  onChange={(e) => setPaymentDetail(e.target.value)}
                  className="border-2 border-black rounded-lg h-10 md:w-[50%] w-full  px-3 mt-3"
                  placeholder="Enter Payment Details"
                  required
                />
              </div>

              <div className=" flex my-6">
                <button type="submit" className="bg-[#A69051] shadow-md shadow-black cursor-pointer text-lg rounded-md hover:bg-[#473e26] px-3 py-2">
                  Withdraw
                </button>
              </div>

              {/* Pin Modal */}
              {showModal && (
                <PinModal
                  setShowModal={setShowModal}
                  onPinVerified={handlePinVerified}
                />
              )}
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Withdraw;
