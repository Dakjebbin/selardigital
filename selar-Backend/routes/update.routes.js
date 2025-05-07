import express from 'express';
import { validateUsers } from '../middlewares/validate.users.js';
import { rolevalidation } from '../middlewares/role.validation.js';
import { fetchAddress, updateWalletAddress } from '../controllers/update.controllers.js';

const router = express.Router();

router.patch("/updateAddress", validateUsers, rolevalidation, updateWalletAddress)
router.get("/fetchAddress", validateUsers, fetchAddress)

export default router