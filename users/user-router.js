const express = require('express');
const router = express.Router();
const dB = require('../data/dbConfig');

const Users = require('./user-model');

router.get('/', (req, res) => {
 Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ 
            errorMessage: "Error retrieving the list of users", 
            message: err.message
        })
    })
})


module.exports = router;
