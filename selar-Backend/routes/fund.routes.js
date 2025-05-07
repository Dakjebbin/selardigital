import express from 'express';
import { 
    fundUser, 
    MinusfundUser, 
    purchase, 
    // getFundData, 
    withdrawal } from '../controllers/fund.controllers.js';
import { validateUsers } from '../middlewares/validate.users.js';
import { rolevalidation } from '../middlewares/role.validation.js';


const router = express.Router();

 router.post("/fund/:id", validateUsers, fundUser)
 router.post("/minusfund/:id", validateUsers, rolevalidation, MinusfundUser)
// router.get("/fund/:email", validateUsers, getFundData)
router.post("/withdraw", validateUsers, withdrawal)
router.post("/purchase", validateUsers, purchase)


export default router