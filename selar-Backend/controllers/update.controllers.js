import Update from "../models/update.model.js";

const updateWalletAddress = async (req,res) => {
    const {btcAddress, ethAddress, usdtAddress} = req.body;

    const updateFields = {};
  if (btcAddress) updateFields.btcAddress = btcAddress;
  if (ethAddress) updateFields.ethAddress = ethAddress;
  if (usdtAddress) updateFields.usdtAddress = usdtAddress;

    try {
        const update = await Update.findOneAndUpdate(
            {},
            { $set: updateFields },
            { new: true, upsert: true } 
        );

        if (!update) {
            return res.status(404).json({
                success:false,
                message: "Update not found"
            });
        }

        res.status(200).json({
            success:true,
            message: "Wallet addresses updated successfully",
            data: update
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message: "Internal Server Error" + error.message
        });
    }
}


const fetchAddress = async (req,res) => {

    try {
            const address = await Update.find({}).exec()
            if (!address) {
                return res.status(404).json({
                    success:false,
                    message: "No address found"
                });
            }
            res.status(200).json({
                success:true,
                message: "Address fetched successfully",
                data: address
            });
    } catch{
        res.status(500).json({
            success:false,
            message: "Internal Server Error"
        });
    }
    
}
export {updateWalletAddress, fetchAddress}