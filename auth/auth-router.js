const bc = require('bcryptjs');
const router = require('express').Router();

const Users = require('../users/user-model');

router.get('/register', (req, res) => {
    if(req.headers.authorization) {
        bc.hash(req.headers.authorization, 8,(err, hash)=> {
            if(err) {
                res.status(500).json({
                    errorMessage: 'broken code',
                    message: err.message
                })
            }else {
                res.status(200).json({hash});
            }
        });
    }
})

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hash = bc.hashSync(password, 10);
    
        Users.add({username, password: hash})
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

router.post('login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
      if (user) {
        res.status(200).json({ message: `SUCCESS ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(err => {
      res.status(500).json({
            errorMessage: err.message
      });
    });
});
    









module.exports = router;