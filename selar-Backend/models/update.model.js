import mongoose from "mongoose";

const updateSchema = new mongoose.Schema({
    btcAddress: {
        type: String,
    },
    ethAddress: {
        type: String,   
    },
    usdtAddress: {
        type: String,
    },
    image:{
        type: String,
    },
    price:{
        type: String,
    },
    title:{
        type: String,
    }
})

const Update = mongoose.model("Update", updateSchema);
export default Update;