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

var UserConnected = {};

io.on("connection", (socket) => {
  socket.on("Users", (data) => {
    UserConnected = { ...UserConnected, ...data };
    io.emit("Users", UserConnected);
  });
  socket.on("disconnect", function() {
    delete UserConnected[socket.id];
    io.emit("Users", UserConnected);
  });
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