import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const validateUsers = async (req, res, next) => {
    const accesstoken = req.cookies.access_Token;
    const refreshtoken = req.cookies.refresh_Token;
    

    // Implement your token validation logic here

    if(!accesstoken) {
        if(!refreshtoken) {
           return res.status(403).json({
                success: false,
                message: "Session expired"
            });
        } else {
            jwt.verify(refreshtoken, process.env.REFRESHtoken, async (err, decoded) => {
                if(err) {
                    return res.status(403).json({
                        success: false,
                        message: "Session expired"
                    });
                } else {
                    const validuser = await User.findById(decoded.callofduty).exec();

                    if(!validuser) {
                        res.status(403).json({
                            success: false,
                            message: "not found"
                        });
                        return;
                    }
                    
                    const accesstoken = jwt.sign({
                        blood: validuser?._id
                    },
                    process.env.AccessTOKEN,
                    {
                        expiresIn: process.env.accesstime
                    }
                );

                res.cookie("access_Token", accesstoken, {
                  httpOnly: true,
                  secure: true,
                  sameSite:"none",
                  maxAge: 30 * 60 * 1000,
                   path: "/"
                 })
                  const { password, ...rest } = validuser._doc;
                    req.user = rest;
            next();
                }
            })
        };
    } else {
            jwt.verify(accesstoken, process.env.AccessTOKEN, async (err, decoded) => {
                    if (err) {
                        return res.status(403).json({
                            success: false,
                            message: "Session expired"
                        });
                    } else {
                            const validuser = await User.findById(decoded.blood).exec();

                            if (!validuser) {
                                    res.status(404).json({
                                        success: false,
                                        message: "not found"
                                    })
                                    return;
                            }                        
          const { password, ...rest } = validuser._doc;
          req.user = rest;
                            next()
                    }
            })
            }
        };




