import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/auth-context";
import SalesChart from "../pages/withdrawChart";
import axios from "axios";
import toast from "react-hot-toast";
import { FaWindowClose } from "react-icons/fa";

const DepositComponent = () => {
  const { userData } = useAuthContext();
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  // const [walletAddress, setWalletAddress] = useState("");
  const [cryptoRates, setCryptoRates] = useState({});
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //const baseUrl = "http://localhost:8527";
  const baseUrl = "/api";
  axios.defaults.withCredentials = true;

  const walletAddresses = 
    {
    Bitcoin : "bc1q3v5w4x5g6h7j8k9l0m1n2o3p4q5r6s7t8u9v0",
    Eth : "0x1234567890abcdef1234567890abcdef12345678",
    USDT : "0xabcdef1234567890abcdef1234567890abcdef12"
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
    
      if (file) {
        
        if (file.size > 5242880) {
          toast.error("Image should not exceed 5MB.");
          setImage(null);  // Clear image if it exceeds size limit
          return;
        } else {
          toast("set")
        }
    
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      } 
    };

    useEffect(() => {
      // Fetch cryptocurrency rates when the component mounts
     const response = fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd")
        .then((res) => res.json())
        .then((data) => {
          setCryptoRates(data); // Set the cryptocurrency rates in state
        });
        (response);
    
    }, []);

    const getCryptoEquivalent = () => {
      if (!amount || !paymentMethod || !cryptoRates) return null;
    
      const rateMap = {
        Bitcoin: "bitcoin",
        Eth: "ethereum",
        USDT: "tether",
      };
    
      const coin = rateMap[paymentMethod];
      const rate = cryptoRates[coin]?.usd;
    
      if (!rate) return null;
    
      const cryptoAmount = parseFloat(amount) / rate;
      return cryptoAmount.toFixed(6);  
    };
    

    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text);
      toast.success("Wallet address copied to clipboard!");
    };
    

  const handleDeposit = async (e) => {
    e.preventDefault();

    if (!image || !amount || !paymentMethod)
      return toast.error("All fields required");

    try {
      setLoading(true);
      const response = await axios.post(
        `${baseUrl}/transactions/deposit`,
        {
          amount,
          paymentMethod,
          image ,
        },
        {
          withCredentials: true,
        }
      );

      if (response?.data.success) {
        toast.success(response?.data?.message);
        setShowModal(false)
        setAmount('')
      }
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="text-right text-xl my-3 font-semibold">
        <p>
          Welcome <span className="text-[#8b7a1a]">Back</span>{" "}
          {userData.username}
        </p>
      </div>

      <div className="mb-5">
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(true);
              }}
            >
              <div className="flex flex-col mb-3">
                <label>Enter Amount ($)</label>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="$"
                  className="border-2 px-2 w-96  py-1 rounded-md mt-2 border-gray-400"
                  type="number"
                />
              </div>

              <div className="flex flex-col">
                <label>Select Payment Method</label>
                <select
                  value={paymentMethod}
                  className="border-2 px-2 w-96 py-1 rounded-md mt-2 border-gray-400"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  name=""
                  id=""
                >
                  <option value="">Select Payment Method</option>
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="Eth">Ethereum</option>
                  <option value="USDT">USDT</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-[#998516] my-3 p-2 font-semibold rounded-2xl"
              >
                Proceed to Payment
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <h3>Upload Payment Proof</h3>

          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#00000060] z-50">
          <div className="bg-white rounded-xl shadow-lg">
            <div className="bg-[#998516] flex items-center justify-between p-4 rounded-t-lg">
              <p className="font-semibold text-lg">Upload Proofs</p>
              <div onClick={() => setShowModal(false)}>
                <FaWindowClose size={20} />
              </div>
            </div>

            <div className="mt-4 p-4">
              <form>
                <div className="flex flex-col mb-3">
                  <label>
                    Wallet Address {amount}($) - {paymentMethod} -  {getCryptoEquivalent()}
                  </label>
                  <input
                   readOnly
                    className="border-2 px-2 w-96  py-1 rounded-md mt-2 border-gray-400"
                    value={walletAddresses[paymentMethod] || "Select a payment method"}
                  />

<button
      type="button"
      onClick={() => copyToClipboard(walletAddresses[paymentMethod])}
      className="ml-2 bg-[#998516] text-white px-3 py-1 rounded-md"
    >
      Copy
    </button>
                </div>

                <div>
                  <input
                    type="file"
                    className="border-2 px-2 w-96  py-1 rounded-md mt-2 border-gray-400"
                    accept="image/*"
                    onChange={handleImageChange}
                   
                  />
                </div>
                <button
                  className="bg-[#998516] my-3 p-2 font-semibold rounded-2xl"
                  onClick={handleDeposit}
                >
                  {loading ? "loading..." : "Submit Deposit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepositComponent;
