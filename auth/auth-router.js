const bc = require('bcryptjs');
const router = require('express').Router();

const Users = require('../users/user-model');

router.post('/register', (req, res) => {
    const userData = req.body;

        users.insert(userData)
        .then(id => {
            res.status(201).json({created: id})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                    errorMessage: "User account could not be created",
                    message: err.message
             });
            });
        })



module.exports = router;