const express = require('express');
const isAdmin = require('../middleware/adminCheck');
const verifyUser = require('../middleware/verifyUser');
const { getEntriesByServiceType, getEntriesByCustomerName, getEntriesByDate, getAllUsers } = require('../controllers/adminDashBoardController');

const router = express.Router();

// Route for getting entries by service type
//GET /api/admin/entries/service?serviceType=Oil%20Change

router.get('/entries/service', verifyUser, isAdmin, getEntriesByServiceType);

// Route for getting entries by customer name
//GET /api/admin/entries/customer?customerName=John

router.get('/entries/customer', verifyUser, isAdmin, getEntriesByCustomerName);

// Route for getting entries by date (daily, monthly, yearly)
//api/admin/entries/date?type=monthly&date=2023-05
//api/admin/entries/date?type=yearly&date=2023
//api/admin/entries/date?type=daily&date=2023-05-21

router.get('/entries/date', verifyUser, isAdmin, getEntriesByDate);
router.get('/allUsers', verifyUser, isAdmin, getAllUsers);

module.exports = router;
