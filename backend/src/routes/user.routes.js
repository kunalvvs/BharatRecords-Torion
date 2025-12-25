import express from 'express';
import {
  getProfile,
  updateProfile,
  updateMobile,
  updateEmail,
  changePassword,
  getReferrals
} from '../controllers/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// Protect all routes
router.use(protect);

router.get('/profile', getProfile);
router.put('/profile', updateProfile);
router.put('/update-mobile', updateMobile);
router.put('/update-email', updateEmail);
router.put('/change-password', changePassword);
router.get('/referrals', getReferrals);

export default router;
