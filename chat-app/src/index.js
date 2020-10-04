const path  = require('path');
const {generateMessage, generateLocationUrl} = require('./utils/messages')
const express   = require('express');
const http  = require('http');
const socketio = require('socket.io');
const WordsFilter = require('bad-words');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/users');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

let count = 0; 

io.on('connection', (socket) => {
    
    socket.on('join', (options, callback ) => {
        const { error, user } = addUser( { id: socket.id, ...options })
        
        if(error){
            return callback(error);
        }
        socket.join(user.room);
        socket.emit('message', generateMessage('Admin', 'Welcome!'));
        socket.broadcast.to(user.room).emit('message', generateMessage('Admin', `${user.username} has joined!`));
        io.to(user.room).emit('userList', {
            room: user.room,
            users: getUsersInRoom(user.room)
        })                   
        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        const filter = new WordsFilter();
        if(filter.isProfane(message)){
            return callback('You have bad words');
        }

        io.to(user.room).emit('message', generateMessage(user.username, message))
        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        if(user){
            io.to(user.room).emit('message', generateMessage('Admin', `${user.username} has left`));
            io.to(user.room).emit('userList', {
                room: user.room,
                users: getUsersInRoom(user.room)
            })                   
        }

    })
    
    socket.on('sendLocation', (position, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('locationUrl', generateLocationUrl(user.username, `https://google.com/maps?q=${position.latitude},${position.longitude}`));
        callback(position);
    })
    
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);

})
