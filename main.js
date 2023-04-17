import express from 'express';
import * as http from "http";
import {Server} from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

server.listen(5173, () => {
    console.log(`Server is running on port ${5173}`);
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('newImage', (imageData) => {
        io.emit('newImage', imageData);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});
