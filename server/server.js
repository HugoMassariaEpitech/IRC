const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const UserController = require("./controllers/User");
const Database = require("./config/Database");

app.get("/", (req, res) => {
    
});

server.listen(5000, () => {
    console.log("Listen to port 5000");
});


const clients = io.engine.clientsCount;



io.on("connection", (socket) => {
    console.log(clients);
    // Users.push({id: socket.id, connected: true});
    // console.log(Users);




    // const users = [];
    // for (let [id, socket] of io.of("/").sockets) {
    //     users.push({
    //     userID: id,
    //     username: socket.username,
    //     });
    // }
    // io.emit("New User", users);
    // UserController.createUser({socket_id: socket.id, name: "Hugo"});


    // socket.on('chat message', (id) => {
    //     io.to(id).emit('chat message', "hello toi"); // Private Message
    // });
    // socket.on('JoinRoom', (id) => {



    //     socket.join(id);
    //     io.in("MiniRoom").emit('chat message', "Hugo joined room");
    // });

    socket.on("New", (id) => {
        console.log(id);
    });
});