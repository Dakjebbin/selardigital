import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Please enter your Fullname"],
    },
    username: {
        type: String,
        required: [true, "Please enter your Username"],
        unique: true,
    },
    // Dateofbirth: {
    //     type: Date,
    //     required: [true, "Please enter your Date of Birth"],
    // },
    email:{
        type: String,
        required: [true, "Please enter your Email"],
        unique: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid Email"]
    }, 
    phonenumber:{
        type: String,
        required: [true, "Please enter your Phone Number"],
        unique: true,
    }, 
    password: {
        type: String,
        required: [true, "Please enter your Password"],
    }, 
     profit: { 
         type: Number, 
         default: 0 
     },
        balance: {
            type: Number, 
            default: 0
        },
     
    // status: { 
    //     type: String, 
    //     enum: ['active', 'blocked'], 
    //     default: 'active' },
    //     investmentPlan: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'InvestmentPlan'
    //     },
        isApproved:{
            type: String, 
            enum: ['Approved', 'Not Approved'], 
            default: 'Not Approved',
        },
        isAdmin: { 
            type: String, 
            default: "USER" 
        },
        // signalAvailable:{
        //     type: String,
        //     enum: ["Signal", "No Signal"],
        //     default: "Signal"
        // },
        resetOtp: {
            type: String,
            default: ""
        },
        resetOtpExpireAt: {
            type: Number,
            default: 0
        }
    
},{
    timestamps: true,
})

const User = mongoose.model("User", UserSchema);

export default User;