import mongoose from "mongoose";

const KycSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: [true, "Please enter your Fullname"],
    },
    email:{
        type: String,
        required: [true, "Please enter your Email"],
        match: [/\S+@\S+\.\S+/, "Please enter a valid Email"]
    }, 
     Dateofbirth: {
       type: Date,
      required: [true, "Please enter your Date of Birth"],
     },
   
    Address:{
        type: String,
        required: [true, "Please enter your Address"],
    }, 
    PhoneNumber:{
        type: String,
        required: [true, "Please enter your Phone Number"],
    },
  
},{
    timestamps: true,
})

const Kyc = mongoose.model("Kyc", KycSchema);

export default Kyc;