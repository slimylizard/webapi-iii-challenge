// code away!
const express = require('express')
const postRouter = require('./server.js');

const server = express();
server.use(express.json());
server.use('/api/posts', postRouter);

server.listen(5555, () => console.log('Mr. server 5555'))