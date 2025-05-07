import mongoose from "mongoose";

const SalesOptimizer = new mongoose.Schema({
    packageName: {
        type: String,
        required: true,
        default: "Sales Optimizer",
    },
    minAmount: {
        type: Number,
        required: true,
        default: 500,
    },
    amount: {
        type: Number,
        required: true,
    }
   
})

const Sales = mongoose.model("SalesOptimizer", SalesOptimizer);
export default Sales;