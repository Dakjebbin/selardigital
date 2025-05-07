import Kyc from "../models/Kyc.model.js";
import User from "../models/user.model.js";


const KycSubmit = async (req, res) => {
    
        const validUser = req.user

    try {
        const {fullname, email, Dateofbirth, Address, phoneNumber} = req.body;

        if (!fullname || !email || !Dateofbirth || !Address || !phoneNumber) {
            res.status(404).json({
                success: false,
                message: "All fields are required",
            })
        }
    
            const valid = await User.findById(validUser._id).exec()

        const newKyc =  new Kyc({
            user:validUser._id,
            fullname,
            email,
            Dateofbirth,
            Address,
            phoneNumber
           
        })

        await newKyc.save()
    
        if (newKyc) {
            res.status(201).json({
                success:true,
                message: "created Successfully",
                newKyc
            })
        } else {
            res.status(400).json({
                success:false,
                message: "user not created successfully"
            });
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Internal server error"
        })
    }
   
}


export {KycSubmit}