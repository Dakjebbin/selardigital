import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import authRoutes from "./routes/user.routes.js";
import transactionRoutes from "./routes/transaction.routes.js"
import fundRoutes from "./routes/fund.routes.js"
// import kycRoutes from "./routes/kyc.routes.js"
import cookieParser from 'cookie-parser';
import cors from "cors"


dotenv.config();

const port = process.env.PORT || 7000
const app = express();
const db = process.env.MONGODB_LINK


app.use(express.json({limit:'12mb'}));
app.use(cookieParser());
app.use(cors({
    origin:[ "https://admin.selardigitalmarketplace.com", "https://www.selardigitalmarketplace.com", "http://localhost:5173"],
    credentials: true,
   
}))
app.use("/auth", authRoutes)
// app.use("/authKyc", kycRoutes);
 app.use("/transactions", transactionRoutes )
app.use("/userFund", fundRoutes)

app.use((err,req,res,next)=>{
    console.error(err.message)
    console.log(err.stack)
    res.status(500).json({
        message:err.message
    })
})


app.get("/", (req, res) => {
        res.send("API WORKING");
})

mongoose.connect(db).then(() => {
   try {
    console.log("database connected successfully");
    app.listen(port,() => {
        console.log(`listening on PORT:${port}`);
    })
   } catch (error) {
    console.log("database did not connect");
   }   
})



