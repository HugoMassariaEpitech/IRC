// Socket IO

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

server.listen(5000, () => {
  console.log("Listen to port 5000");
});

io.on("connection", (socket) => {
  socket.on("New Connexion", (message) => {
    socket.data.isConnected = true;
    io.emit("New Connexion", socket);
    // io.emit("New Connexion", Array.from(socket.nsp.sockets.keys()).reduce((json, value) => { json[value] = []; return json; }, {})); // New User Notification
  });

  // socket.on("Message", (message) => {
  //     io.emit("Message Received", message);
  // });

  // socket.on("New Connexion", (message) => {
  //   console.log(message);
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

// Mangoose & Routers

const connectDB = require("./config/Database");
const routes = require("./routes/export.route");
const cors = require("cors");
const logger = require("morgan");
const fs = require("fs");

// Connect to the database
connectDB();

// Middleware
// To parse the body of the request
app.use(express.json());

// To display the logs in the console
app.use(logger("dev"));

// CORS
// Allow the front to communicate with the Back
app.use(cors({
  origin: "http://localhost:3000"
}));

// Import API routes
app.use('/api/auth', routes.auth);
app.use('/api/user', routes.user);
app.use('/api/conversation', routes.conversation);
app.use('/api/message', routes.message);