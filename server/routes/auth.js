const express = require('express');
const { signUpController, loginController } = require('../controllers/authController');
const router = express.Router();

require('dotenv').config();



router.post('/signup', signUpController);
router.post('/login', loginController);
router.post('/sendotp',);
router.post('/verifyotp',);
router.patch('/changepassword',);

module.exports = router;
