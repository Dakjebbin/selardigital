import User from "../models/user.model.js";
import Transaction from "../models/transaction.model.js";
import cloudinary from "../utils/cloudinary.js";


const updateProfit = async (req, res) => {

    const {id} = req.params;

    try {
        const {profit} = req.body;


        if (isNaN(profit)) {
            return res.status(400).json({
                success: false,
                message: "Invalid profit value"
            });
        }
        
        const profitValue = Number(profit);

        const user = await User.findByIdAndUpdate(
            id, 
            { $inc: { profit: profitValue } }, 
            { new: true }
          );
          

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
            
        }
           
        
        const newTransaction = new Transaction({
            user: id,  
            amount: profit,
            type: "New Sales", 
            status: "Completed",
            imageUrl: "N/A",
            paymentMethod: "N/A",
        });
        // user.profit = Number(user.profit) + Number(profit);
        await user.save();
        await newTransaction.save();

        
        res.status(200).json({
            success: true,
            message: "Profit updated successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error
        })
    }
    
}

const getTransactions = async (req, res) => {
    const {email} = req.params;
    const user = req.user;

    if (user.email !== email) {
        return res.status(403).json({ success: false, message: 'User not found or unauthorized' });
      }
    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required' });
      }
        try {
            const transactions = await Transaction.find({ user:email })
     .sort({ date: -1 })  // Sort by date (newest first)
      .exec();

      if (transactions.length === 0) {
        return res.status(404).json({ success: false, message: 'No transactions found for this user' });
      }


            res.status(200).json({
                success: true,
                message: "User transactions fetched successfully",
                data: transactions
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Internal server error " + error.message 
            })
        }
}

const getTransactionsAdmin = async (req, res) => {
    const {id} = req.params;

    try {
        const transactions = await Transaction.find({ user: id }).sort({ date: -1 }).exec();
  

  if (transactions.length === 0) {
    return res.status(404).json({ success: false, message: 'No transactions found for this user' });
  }


        res.status(200).json({
            success: true,
            message: "User transactions fetched successfully",
            data: transactions
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error " + error.message 
        })
    }
}

const Deposit = async (req, res) => {
    const {  paymentMethod, amount, image } = req.body;  // Default status to "pending"

    const validUser = req.user;

  
    if (!paymentMethod || !amount || !image) {
      return res.status(400).json({
        success: false,
        message: "PaymentMethod, amount, and image are required"
      });
    }

    if ( amount <= 0) {
        return res.status(400).json({
          success: false,
          message: "Amount must be greater than 0"
        });
      }
      
  
    try {
     
  
      const user = await User.findById(validUser._id).exec();
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found"
        });
      }

      const result = await cloudinary.uploader.upload(image, {
        folder: 'payments/proofs',
       public_id: `${validUser.username}-${Date.now()}`
      });
  
      const newTransaction = new Transaction({
        user: validUser._id, 
        type: "Deposit",    
        amount,
        paymentMethod,
        imageUrl: result.secure_url,
        status: "Pending",  // Use the status from the request
      });
  
      await newTransaction.save();

      
  
      res.status(200).json({
        success: true,
        message: "Transaction created successfully",
        data: newTransaction
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error: " 
      });
    }
  };

  const updateTransactionStatus = async (req, res) => {
    const { tid } = req.params; // Expecting 'id' in params now
    const { status } = req.body;
  
    // Validate required fields
    if (!status) {
      return res.status(400).json({ success: false, message: "Status is required" });
    }
  
    const validStatuses = ['Pending', 'Completed', 'Failed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: `Invalid status. Allowed values: ${validStatuses.join(", ")}` });
    }
  
    try {
      // Find transaction by the custom `id` field
      // const updatedTransaction = await Transaction.findOneAndUpdate(
      //   { tid }, // Find by custom 'id' field
      //   { status },
      //   { new: true } // Return the updated transaction
      // ).exec();


      const updatedTransaction = await Transaction.findByIdAndUpdate(tid, {
        status,
        $set: { updatedAt: new Date() } // Update the timestamp
      }, {
        new: true, // Return the updated document
     
      }).exec();
      

      if (!updatedTransaction) {
        return res.status(404).json({ success: false, message: "Transaction not found" });
      }

      const user = await User.findOne({ _id: updatedTransaction.user }).exec()

      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }

      if(updatedTransaction.type === 'Deposit' && updatedTransaction.status === 'Completed') {
        const amount = parseFloat(updatedTransaction.amount);
        if (isNaN(amount)) {
          return res.status(400).json({ success: false, message: "Invalid transaction amount" });
        }
        user.balance = parseFloat(user.balance) + amount;
        await user.save(); 
      }

      if (updatedTransaction.type === 'Withdrawal' && updatedTransaction.status === 'Completed') {
        const amount = parseFloat(updatedTransaction.amount);
        if (isNaN(amount)) {
          return res.status(400).json({ success: false, message: "Invalid transaction amount" });
        }
        user.balance = parseFloat(user.balance) - amount;
        await user.save();
      }

  
      return res.status(200).json({
        success: true,
        message: "Status updated successfully",
        data: updatedTransaction
      });
    } catch (error) {
      console.error("Error updating transaction:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error: " + error.message
      });
    }
   };






export {updateProfit, getTransactions, getTransactionsAdmin, Deposit, updateTransactionStatus}