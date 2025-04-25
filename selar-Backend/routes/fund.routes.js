import express from 'express';
import { 
    // fundUser, 
    // getFundData, 
    withdrawal } from '../controllers/fund.controllers.js';
import { validateUsers } from '../middlewares/validate.users.js';


const router = express.Router();

// router.post("/fund/:id", validateUsers, userActive, fundUser)
// router.get("/fund/:email", validateUsers, getFundData)
router.post("/withdraw", validateUsers, withdrawal)


export default router