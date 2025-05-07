import express from 'express';
import { validateUsers } from '../middlewares/validate.users.js';
import { getKyc, KycSubmit } from '../controllers/Kyc.controllers.js';
import { rolevalidation } from '../middlewares/role.validation.js';

const Router = express.Router();

Router.post("/kyc", validateUsers, KycSubmit )
Router.get("/getKyc", validateUsers, rolevalidation, getKyc)


export default Router;