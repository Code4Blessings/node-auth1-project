const express = require('express')
const sessions = require('express-sessions')

const server = express();

server.use(express.json());

const userRouter = require('../users/user-router')
const authRouter = require('../auth/auth-router')

server.get('/', (req, res) => {
    res.send({
        Greeting: 'Greetings from Port 5000'
    })
})

server.use('/api/users', userRouter );
server.use('api/auth', authRouter);

module.exports = server;
