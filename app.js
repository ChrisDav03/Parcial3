const express = require('express');
const app = express();
const http = require('http');
const { disconnect } = require('process');
const server =http.createServer(app)

const {Server} = require('socket.io')
const io =   new Server(server)

    io.on('connection', (socket) => {
        console.log('Usuario conectado');
        socket.on('chat', (msg) => {
          io.emit('chat', msg);
        });
      });
 

server.listen(3000, () =>{
    console.log('Servidor corriendo en localhost:3000')
})

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/cliente/index.html`)
})