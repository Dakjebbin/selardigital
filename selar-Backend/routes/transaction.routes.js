import express from 'express';
import { validateUsers } from '../middlewares/validate.users.js';
import { rolevalidation } from '../middlewares/role.validation.js';
import { Deposit, getTransactionsAdmin, updateProfit    } from '../controllers/transaction.controllers.js';

const router = express.Router();


router.post("/profits/:id", validateUsers, rolevalidation, updateProfit)
//router.delete("/profits", validateUsers, rolevalidation, deleteProfit)
// router.get("/get-transaction/:email", validateUsers, getTransactions)
router.get("/get-transactionAdmin/:id", validateUsers, getTransactionsAdmin)
router.post("/deposit", validateUsers, Deposit)
// router.post('/image-Upload', validateUsers, imageUpload);

export default router