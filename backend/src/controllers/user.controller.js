import User from '../models/User.model.js';
import Wallet from '../models/Wallet.model.js';
import Document from '../models/Document.model.js';
import { sendOTP } from '../utils/otp.utils.js';

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getProfile = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user._id });
    const documentCount = await Document.countDocuments({ 
      user: req.user._id, 
      isDeleted: false 
    });
    
    res.json({
      status: 'success',
      data: {
        user: req.user,
        wallet: {
          balance: wallet?.balance || 0
        },
        stats: {
          totalDocuments: documentCount
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateProfile = async (req, res) => {
  try {
    const { fullName, dob, aadhaarNumber, panNumber } = req.body;
    
    const user = await User.findById(req.user._id);
    
    if (fullName) user.fullName = fullName;
    if (dob) user.dob = dob;
    if (aadhaarNumber) user.aadhaarNumber = aadhaarNumber;
    if (panNumber) user.panNumber = panNumber.toUpperCase();
    
    await user.save();
    
    res.json({
      status: 'success',
      message: 'Profile updated successfully',
      data: { user }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// @desc    Update mobile number
// @route   PUT /api/users/update-mobile
// @access  Private
export const updateMobile = async (req, res) => {
  try {
    const { newMobile } = req.body;
    
    // Check if mobile already exists
    const existingUser = await User.findOne({ mobile: newMobile });
    if (existingUser) {
      return res.status(400).json({
        status: 'error',
        message: 'Mobile number already in use'
      });
    }
    
    // Send OTP to new mobile
    await sendOTP(newMobile, 'update_mobile');
    
    res.json({
      status: 'success',
      message: 'OTP sent to new mobile number',
      data: { newMobile }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// @desc    Update email
// @route   PUT /api/users/update-email
// @access  Private
export const updateEmail = async (req, res) => {
  try {
    const { newEmail } = req.body;
    
    // Check if email already exists
    const existingUser = await User.findOne({ email: newEmail });
    if (existingUser) {
      return res.status(400).json({
        status: 'error',
        message: 'Email already in use'
      });
    }
    
    // Send OTP to mobile for verification
    await sendOTP(req.user.mobile, 'update_email');
    
    res.json({
      status: 'success',
      message: 'OTP sent for verification',
      data: { newEmail }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// @desc    Change password
// @route   PUT /api/users/change-password
// @access  Private
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    
    const user = await User.findById(req.user._id).select('+password');
    
    const isPasswordValid = await user.comparePassword(currentPassword);
    if (!isPasswordValid) {
      return res.status(400).json({
        status: 'error',
        message: 'Current password is incorrect'
      });
    }
    
    user.password = newPassword;
    user.security.lastPasswordChange = new Date();
    await user.save();
    
    res.json({
      status: 'success',
      message: 'Password changed successfully'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

// @desc    Get referral stats
// @route   GET /api/users/referrals
// @access  Private
export const getReferrals = async (req, res) => {
  try {
    const referrals = await User.find({ referredBy: req.user._id })
      .select('fullName email createdAt')
      .sort({ createdAt: -1 });
    
    res.json({
      status: 'success',
      data: {
        referralCode: req.user.referralCode,
        totalReferrals: req.user.referralCount,
        referrals
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};
