const express = require('express')

const server = express();

server.use(express.json());

const userRouter = 

server.get('/', (req, res) => {
    res.send({
        Greeting: 'Greetings from Port 4000'
    })
})

server.use('/api/users', )