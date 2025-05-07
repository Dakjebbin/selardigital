import express from 'express';
import { validateUsers } from '../middlewares/validate.users.js';
import { KycSubmit } from '../controllers/Kyc.controllers.js';

const Router = express.Router();

Router.post("/kyc", validateUsers, KycSubmit )


export default Router;