const express = require('express');
const router = express.Router();

// Import the model (burger.js) to use its database functions
const burger = require('../models/burger');

// Create all our routes and set up logic within those routes where required
router.get('/', (req, res) => {
    burger.selectAll( (data) => {
        const hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render('index', hbsObject)
    })
});

router.post

// Export routes for server.js to read and use
module.exports = router;