const express = require('express')
const sessions = require('express-sessions')

const server = express();

server.use(express.json());

const userRouter = require('../users/user-router')

server.get('/', (req, res) => {
    res.send({
        Greeting: 'Greetings from Port 4000'
    })
})

server.use('/api/users', userRouter );

module.exports = server;
