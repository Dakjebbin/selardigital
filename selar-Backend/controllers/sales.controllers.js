
import Sales from "../models/Sales.optimizer.model.js";
import Transaction from "../models/transaction.model.js";
import User from "../models/user.model.js";

const salesOptimizer = async (req, res) => {
    const {amount, packageName} = req.body;
    const validUser = req.user;

  

    try {
      
        const packageData = await Sales.findOne({ packageName: "Sales Optimizer" });
        
      
        const minAmount = packageData.minAmount;

        const numericAmount = parseFloat(amount);

        if (isNaN(numericAmount) || numericAmount <= 0) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid numeric amount"
            });
        }

        if (numericAmount < minAmount) {
            return res.status(400).json({
                success: false,
                message: `Minimum purchase amount is ${minAmount}`
            });
        }


      const user = await User.findById(validUser._id).exec()

      if(!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
      }

      if (user.balance < numericAmount) {
        return res.status(400).json({
            success: false,
            message: "Insufficient user balance"
        });
    }
    

      user.balance -= numericAmount;
      await user.save();

      
    
    const transaction = new Transaction({
        user: user._id,  // Storing the user's _id from the database
        amount,
        type: "Sales Optimizer",
        status: 'Completed',
        paymentMethod: "N/A",
        imageUrl: "N/A",
    });
    await transaction.save();

    return res.status(200).json({
        success: true,
        message: "Funds successfully deducted from user",
        updatedBalance: user.balance,  // Return the updated balance
    });
 
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal Server error"
        });
    }
}

const updateSalesMininmumAmount = async (req,res) => {
    const {minAmount} = req.body;

    try {
        const updatedSales = await Sales.findOneAndUpdate(
            { packageName: "Sales Optimizer" },
            { minAmount },
            { new: true }
        ).exec();

        if (!updatedSales) {
            return res.status(404).json({
                success: false,
                message: "Sales Optimizer not found"
            })
        }

        if (isNaN(minAmount) || minAmount <= 0) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid numeric amount"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Sales Optimizer minimum amount updated successfully",
            updatedSales
        })

        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
        
    }
}

const getMinAmount = async (req, res) => {
    try {
        const sales = await Sales.findOne({ packageName: "Sales Optimizer" });
        if (!sales) {
            return res.status(404).json({
                success: false,
                message: "Sales Optimizer not found"
            });
        }

        return res.status(200).json({
            success: true,
            minAmount: sales.minAmount
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}


export {
    salesOptimizer,
    updateSalesMininmumAmount,
    getMinAmount
}