const path  = require('path');
const {generateMessage} = require('./utils/messages')
const express   = require('express');
const http  = require('http');
const socketio = require('socket.io');
const WordsFilter = require('bad-words');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

let count = 0; 

io.on('connection', (socket) => {
    socket.emit('message', generateMessage('Welcome!'));
    socket.broadcast.emit('message', generateMessage('A new user has joined!'))

    socket.on('sendMessage', (message, callback) => {
        const filter = new WordsFilter();
        if(filter.isProfane(message)){
            return callback('You have bad words');
        }

        io.emit('message', generateMessage(message))
        callback();
    });

    socket.on('disconnect', () => {
        io.emit('message', generateMessage('A user has left'))
    })
    
    socket.on('sendLocation', (position, callback) => {
        io.emit('locationUrl', `https://google.com/maps?q=${position.latitude},${position.longitude}`);
        callback(position);
    })
    
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);

})
