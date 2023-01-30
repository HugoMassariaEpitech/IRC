const app = require("./server");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
});

const socketIO = io.on("connection", (socket) => {
    io.emit("New User", Array.from(socket.nsp.sockets.keys()).reduce((json, value) => { json[value] = []; return json; }, {})); // New User Notification

    socket.on("Message", (message) => {
        io.emit("Message Received", message);
    });

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


module.exports = socketIO;

