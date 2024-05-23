const express = require('express');
const { signUpController, loginController } = require('../controllers/authController');
const isAdmin = require('../middleware/adminCheck');
const verifyUser = require('../middleware/verifyUser');

const router = express.Router();

require('dotenv').config();



router.post('/signup', verifyUser, isAdmin, signUpController);
router.post('/login', loginController);
router.post('/sendotp',);
router.post('/verifyotp',);
router.patch('/changepassword',);

module.exports = router;
