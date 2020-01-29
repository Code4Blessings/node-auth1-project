const bcrypt = require('bcryptjs');

const Users = require('../users/user-model');

module.exports = (req, res, next) => {
    //use session information to restrict access
    console.log(req.session)
    next()
}