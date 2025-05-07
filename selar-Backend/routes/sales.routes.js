import express from 'express';
import { validateUsers } from '../middlewares/validate.users.js';
import { rolevalidation } from '../middlewares/role.validation.js';
import { getMinAmount, salesOptimizer, updateSalesMininmumAmount } from '../controllers/sales.controllers.js';


const router = express.Router();

router.post("/SalesOptimizer", validateUsers, salesOptimizer)
router.patch("/updateMin", validateUsers, rolevalidation, updateSalesMininmumAmount)
router.get("/getMinAmount", validateUsers, getMinAmount)


export default router