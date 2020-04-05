import express from 'express';
import http from 'http';
import path from 'path';
import socketIO from 'socket.io';
import index from './routes/index';

const PORT = process.env.PORT || 5000;
let app = express();
let server = new http.Server(app);
let io = socketIO(server);

app.set('port', PORT);
app.use(index);

// Starts the server
server.listen(PORT, () => {
    console.log('Listening on port ', PORT);
});

// Websocket handlers
io.on('connection', (socket) => {
    console.log('New client connected.');
    setInterval(() => {
        welcomeMessage(socket)
    }, 1000);
    socket.on('disonnect', () => {
        console.log('Client disconnected.')
    });
});

const welcomeMessage = async (socket: socketIO.Socket) => {
    try {
        socket.emit('message', 'whassup bitches.');
    } catch (error) {
        console.error('Error: ', error);
    }
}