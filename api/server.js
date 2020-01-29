const express = require('express')
const session = require('express-session')
const helmet = require('helmet')

const server = express();

const userRouter = require('../users/user-router')
const authRouter = require('../auth/auth-router')

const sessionConfig = {
    name: "cookieMonster",
    secret: process.env.SESSION_SECRET || "Keep it secret, keep it safe", //used for cookie encryption
    cookie: {
        maxAge: 1000 * 60 * 10, // 10 min in ms
        secure: false, //set to true in production, only send cookies over HTTPS
        httpOnly: true, //JS cannot access the cookies on the browser
    },
    resave: false,
    saveUninitialized: true, //read about it for GDR compliance
}

server.use(helmet());
server.use(express.json());
server.use(session(sessionConfig))

server.use('/api/users', userRouter);
server.use('/api/auth', authRouter);


server.get('/', (req, res) => {
    res.send({
        Greeting: 'Greetings from Port 5000'
    })
})


module.exports = server;
