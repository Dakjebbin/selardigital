
import fundModel from "../models/fund.model.js";
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

const purchase = async (req, res) => {
    const { amount, courseType} = req.body;
    const validUser = req.user;

    if (!validUser) {
        return res.status(401).json({ message: 'Unauthorized' });
     }

     if (!amount || amount <= 0) {
        return res.status(400).json({ 
            success:false,
            message: 'Invalid amount okay oh' 
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

        // const totalBalance = user.balance + user.profit;

        if (amount > user.balance) {
            return res.status(400).json({ 
                success:false,
                message: 'Insufficient balance'
             });
          }
  
          const validCourseTypes = {
            UBB: { min: 500, max: 10000 },
            AffiliateLab: { min: 10001, max: 50000 },
            HubSpotAcademy: { min: 50001, max: 500000 },
            SavageAffiliates: { min: 500001, max: 5000000 }
        };

        const range = validCourseTypes[courseType];
        if (!range || amount < range.min || amount > range.max) {
            return res.status(400).json({
                success: false,
                message: `Amount ${amount} is not valid for course type "${courseType}"`
            });
        }

        user.balance -= amount;

       await user.save();
       
        
       const transaction = new Transaction({
        user: user._id,  // Storing the user's _id from the database
        amount,
        type: "Course Purchase",
        status: 'Completed',
        courseType
    });
    await transaction.save();

       res.status(200).json({ success: true, message: 'Course Purchase successful' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error'+ error.message });
    }
}

const fundUser = async (req, res) => {
    const {id} = req.params;
   let {amount, plan} = req.body;

    try {
        amount = parseFloat(amount); 

        if (isNaN(amount) || !amount || !plan) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid amount and plan"
            });
        }

    if (!amount ||!plan) {
        return res.status(400).json({
            success: false,
            message: "Please provide amount, and plan"
        });
    }

    if (amount <= 0) {
        return res.status(400).json({ 
            success: false,
            message: "Invalid amount" 
        });
      }

      const user = await User.findById(id).exec()

      if(!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
      }

      user.balance += amount;
      await user.save();

      const fund = new fundModel({
        email: user._id,  // Storing the user's _id from the database
        amount,
        plan
    });
    await fund.save();
    
    const transaction = new Transaction({
        user: user._id,  // Storing the user's _id from the database
        amount,
        type: "Course",
        status: 'Completed',
        imageUrl: "N/A",
        paymentMethod: "N/A",
    });
    await transaction.save();

    return res.status(200).json({
        success: true,
        message: "User successfully funded",
        updatedBalance: user.balance,  // Return the updated balance
        transactionId: transaction._id  // Return the transaction ID
    });
 
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal Server error" + error.message
        });
    }
}

const MinusfundUser = async (req, res) => {
    const {id} = req.params;
   let {amount} = req.body;

  

    try {
        amount = parseFloat(amount); 

        if (isNaN(amount) || !amount ) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid amount "
            });
        }

    if (!amount ) {
        return res.status(400).json({
            success: false,
            message: "Please provide amount"
        });
    }

    if (amount <= 0) {
        return res.status(400).json({ 
            success: false,
            message: "Invalid amount" 
        });
      }

      const user = await User.findById(id).exec()

      if(!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
      }

      if (user.balance < amount) {
        return res.status(400).json({
            success: false,
            message: "Insufficient user balance"
        });
    }
    

      user.balance -= amount;
      await user.save();

      const fund = new fundModel({
        email: user._id,  // Storing the user's _id from the database
        amount,
        plan: "Minusfund"
    });
    await fund.save();
    
    // const transaction = new Transaction({
    //     user: user._id,  // Storing the user's _id from the database
    //     amount,
    //     type: "Course",
    //     status: 'Completed'
    // });
    // await transaction.save();

    return res.status(200).json({
        success: true,
        message: "Funds successfully deducted from user",
        updatedBalance: user.balance,  // Return the updated balance
    });
 
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal Server error" + error.message
        });
    }
}

export { withdrawal, fundUser, purchase, MinusfundUser };