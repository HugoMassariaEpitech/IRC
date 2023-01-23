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

const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log("DB Connection Successfull");
}).catch((err) => {
    console.log(err.message);
});

const UserController = require("./controllers/User");

app.get("/", (req, res) => {
    
});

server.listen(process.env.PORT, () => {
    console.log(`Listen to port ${process.env.PORT}`);
});










io.on("connection", (socket) => {
    io.emit("New User", "Welcome !");
    // UserController.createUser({socket_id: socket.id, name: "Hugo"});


    // socket.on('chat message', (id) => {
    //     io.to(id).emit('chat message', "hello toi"); // Private Message
    // });
    // socket.on('JoinRoom', (id) => {



    //     socket.join(id);
    //     io.in("MiniRoom").emit('chat message', "Hugo joined room");
    // });
});