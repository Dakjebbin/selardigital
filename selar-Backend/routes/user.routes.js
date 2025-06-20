import express from 'express';
import { 
    deleteUser,
     forgotPassword,
    login, 
    logout, 
    register, 
    resetPassword,
    updateApprovedStatus,
    userDetail, 
    userDetails, 
     validate, 
    validateOtp
} from '../controllers/user.controllers.js';
import { validateUsers } from '../middlewares/validate.users.js';
import { rolevalidation } from '../middlewares/role.validation.js';

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/users", validateUsers,rolevalidation, userDetails )
router.get("/users-client", validateUsers, userDetails )
 router.get("/users/:id", validateUsers, userDetail )
router.get("/validate", validateUsers, validate)
// router.patch("/approvedStatus/:id", validateUsers, rolevalidation, updateApprovedStatus)
router.post("/logout", validateUsers, logout)
router.post("/forgot-Password", forgotPassword)
router.post("/validate-Otp", validateOtp)
router.post("/reset-password", resetPassword)
router.delete("/delete-user/:id", validateUsers, rolevalidation, deleteUser)



export default router