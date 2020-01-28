const bc = require('bcryptjs');
const router = require('express').Router();

const Users = require('../users/user-model');

router.post('/register', (req, res) => {
    const userData = req.body;
    const hash = bc.hashSync(req.body.password, 10);
    userData.password = hash;
    
        //hash password before saving the user
        Users.insert(userData)
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