const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
 
const app = express();
const server = http.createServer(app);
const io = socketio(server);


//set static Folder
app.use(express.static(path.join(__dirname, 'Public')));

//run when client connects

io.on('connection',socket =>{


 //welcome current user
 socket.emit('message','welcome to chaty');


 
//Brodcast when a user connect
socket.broadcast.emit('message', 'A user has joined the chat');

//Runs when client disconnect
socket.on('disconnect',()=>{
   io.emit('message','A user has left')
});

//Listen for chatMessage
socket.on('chatMessage',(msg) => {
    io.emit('message',msg)
});
});


const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log('Server Listening on 3000'));
