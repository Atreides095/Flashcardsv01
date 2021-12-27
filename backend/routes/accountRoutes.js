import express from 'express';
import {} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authUser, createAccount } from '../controllers/accountController.js';

const router = express.Router();

router.route('/new').post(createAccount);
router.route('/login').post(authUser);

export default router;
