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

app.get("/", (req, res) => {
    
});

server.listen(5000, () => {
    console.log("Listen to port 5000");
});

io.on("connection", (socket) => {
    io.emit("New Connexion", Array.from(socket.nsp.sockets.keys()).reduce((json, value) => { json[value] = []; return json; }, {})); // New User Notification
    
    
    
    

    
    // socket.on("Message", (result) => {
    //     io.to(result["to"]).emit("Message Received", result["message"]); // Private Message
    //     io.to(socket.id).emit("Message Sent", result["message"]);
    // });






    // socket.on("Get All Users", () => {
    //     socket.emit("All Users", Array.from(socket.nsp.sockets.keys()));
    // });


    






    // UserController.createUser({socket_id: socket.id, name: "Hugo"});


    // socket.on('chat message', (id) => {
    //     io.to(id).emit('chat message', "hello toi"); // Private Message
    // });
    // socket.on('JoinRoom', (id) => {



    //     socket.join(id);
    //     io.in("MiniRoom").emit('chat message', "Hugo joined room");
    // });
});













// const mongoose = require("mongoose");
// require("dotenv").config();

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(()=> {
//     console.log("DB Connection Successfull");
// }).catch((err) => {
//     console.log(err.message);
// });