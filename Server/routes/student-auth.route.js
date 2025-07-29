import express from 'express';
import { getLoggedInAdminController, loginAdminController } from '../controllers/admin-auth.controller.js';
import { getLoggedInStudentController, loginStudentController, registerStudentController } from '../controllers/student-auth.controller.js';
import { handleValidationErrors } from '../middlewares/validation.middleware.js';
import { verifyAccessToken } from '../utils/jwt.config.js';
import { loginAdminUserValidation, registerStudentUserValidation } from '../validation/user.validation.js';
const router = express.Router();

router.post('/register',registerStudentUserValidation, handleValidationErrors, registerStudentController);

router.post('/login', loginAdminUserValidation, handleValidationErrors, loginStudentController);

router.get('/my-account', verifyAccessToken, getLoggedInStudentController);

export default router;