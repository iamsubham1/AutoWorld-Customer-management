const express = require('express');
const isAdmin = require('../middleware/adminCheck');
const verifyUser = require('../middleware/verifyUser');
const { addEntry, getAllEntries, updateEntry, deleteEntry, deleteAllEntries } = require('../controllers/serviceController');

const router = express.Router();

require('dotenv').config();


// Route for adding a new car entry
router.post('/addcarentry', verifyUser, addEntry);

// Route for getting all car entries
router.get('/getcarentries', verifyUser, isAdmin, getAllEntries);

// Route for updating a car entry's service charge
router.put('/updatecarentry/:id', verifyUser, updateEntry);

// Route for deleting a car entry
router.delete('/deletecarentry/:id', verifyUser, isAdmin, deleteEntry);

// Route for deleting all car entries
router.delete('/deleteall', verifyUser, isAdmin, deleteAllEntries);

module.exports = router;


