
import Transaction from "../models/transaction.model.js";
import User from "../models/user.model.js";
import { validationResult } from "express-validator";

const withdrawal = async (req, res) => {
    const { amount, paymentDetail} = req.body;
    const validUser = req.user;

    if (!validUser) {
        return res.status(401).json({ message: 'Unauthorized' });
     }

     if (!amount || amount <= 0) {
        return res.status(400).json({ 
            success:false,
            message: 'Invalid amount' 
        });
     }

    //  await body('paymentDetail').notEmpty().withMessage('Payment detail is required').run(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await User.findById(validUser._id).exec();

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const totalBalance = user.balance + user.profit;

        if (amount > totalBalance) {
            return res.status(400).json({ 
                success:false,
                message: 'Insufficient balance'
             });
          }


          let amountToDeductFromBalance = 0;
          let amountToDeductFromProfit = 0;

          if (amount <= user.balance) {
            amountToDeductFromBalance = amount;
          } else {
            // If not enough balance, deduct from profit
            amountToDeductFromBalance = user.balance;
            amountToDeductFromProfit = amount - user.balance;
          }

          user.balance -= amountToDeductFromBalance;
    user.profit -= amountToDeductFromProfit;

       await user.save();

        
       const transaction = new Transaction({
        user: user._id,  // Storing the user's _id from the database
        amount,
        type: "Withdrawal",
        status: 'Completed'
    });
    await transaction.save();


       res.status(200).json({ success: true, message: 'Withdrawal successful' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export { withdrawal}