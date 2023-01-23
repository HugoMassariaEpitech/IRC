const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const UserController = require("./controllers/User");
const Database = require("./config/Database");

app.get("/", (req, res) => {
    res.sendFile("");
});

server.listen(3000, () => {
    console.log("Listen to port 3000");
});










io.on("connection", (socket) => {
    
    UserController.createUser({socket_id: socket.id, name: "Hugo"});


    socket.on('chat message', (id) => {
        io.to(id).emit('chat message', "hello toi"); // Private Message
    });
    socket.on('JoinRoom', (id) => {



        socket.join(id);
        io.in("MiniRoom").emit('chat message', "Hugo joined room");
    });
});