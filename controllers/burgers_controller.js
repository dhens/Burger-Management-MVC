const express = require('express');
const router = express.Router();

// Import the model (burger.js) to use its database functions
const burger = require('../models/burger');

// Create all our routes and set up logic within those routes where required
router.get('/', (req, res) => {
    burger.all( (data) => {
        const hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render('index', hbsObject)
    })
});

router.post('/api/burgers', (req, res) =>  {
    burger.create(['burger_name'],
    [req.body.burger_name], (result) => {
        res.json({ id: res.insertId})
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = req.params.id
    burger.update(['devoured' condition],
    [req.body.devoured, condition], (result) => {
        location.reload();
    })
})

// Export routes for server.js to read and use
module.exports = router;