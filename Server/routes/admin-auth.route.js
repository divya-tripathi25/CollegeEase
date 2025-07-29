import express from 'express';
import { getLoggedInAdminController, loginAdminController, registerAdminController } from '../controllers/admin-auth.controller.js';
import { handleValidationErrors } from '../middlewares/validation.middleware.js';
import { loginAdminUserValidation, registerAdminUserValidation } from '../validation/user.validation.js';
import { verifyAccessToken } from '../utils/jwt.config.js';
const router = express.Router();

router.post('/register', registerAdminUserValidation, handleValidationErrors, registerAdminController);

router.post('/login', loginAdminUserValidation, handleValidationErrors, loginAdminController);

router.get('/my-account', verifyAccessToken, getLoggedInAdminController);

export default router;