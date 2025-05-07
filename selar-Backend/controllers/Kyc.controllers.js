import Kyc from "../models/Kyc.model.js";
import User from "../models/user.model.js";


const KycSubmit = async (req, res) => {
    
        const validUser = req.user

    try {
        const {fullname, email, Dateofbirth, Address, PhoneNumber} = req.body;

        if (!fullname || !email || !Dateofbirth || !Address || !PhoneNumber) {
           return res.status(404).json({
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
            PhoneNumber
           
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
            message: "Internal server error" +error.message
        })
    }
   
}

const getKyc = async (req, res) => {
    const validUser = req.user

    try {
        const kyc = await Kyc.find({}).exec()

        if (kyc.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No KYC found"
            });
        }

        if (kyc) {
            res.status(200).json({
                success:true,
                message: "KYC fetched successfully",
                kyc
            })
        } else {
            res.status(404).json({
                success:false,
                message: "KYC not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Internal server error"
        })
    }
}


export {KycSubmit, getKyc}