const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

const router = require('./router');
const { addUser, removeUser, getUser, getUsersInRoom} = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: '*',
        methods: ["GET","POST"]
    }
});

io.on('connection', (socket)=>{
    socket.on('join', ({name,room}, callback) => {
        // console.log(name, room, socket.id);
        const {error,user} = addUser({id: socket.id, name, room});
        if(error) return callback(error);
        
        console.log(user);
        socket.join(user.room);
        socket.emit('message',{user: 'admin', text: `Hi👽! ${user.name}, Welcome to the room ${user.room}😎`});
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has jumped in!🎈`});
        callback();
        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});
    });

    socket.on('sendMessage', (message, callback) =>{
        const user = getUser(socket.id);
        if(!user) return ;
        io.to(user.room).emit('message', {user: user.name, text: message});
        callback();
    })

    socket.on('disconnect', ()=>{
        const user = removeUser(socket.id);
        console.log("Someone Left!");
        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left...😥`});
            io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});
        }
    });
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(router);

server.listen(PORT, ()=>{
    console.log(`Server running on PORT: ${PORT}`);
});

