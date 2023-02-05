// Socket IO

const axios = require("axios");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const messageController = require("./controllers/message.controller");
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
  socket.on("Database", (data) => {
    io.to(data.socket).emit("Database", { nickname: data.nickname, avatar: data.avatar, messages: data.messages, uid: data.uid });
  });
  socket.on("Users", (data) => {
    UserConnected = { ...UserConnected, ...data };
    io.emit("Users", UserConnected);
  });
  socket.on("Message", (data) => {
    axios.post("http://localhost:5000/api/message", { from: data.from.uid, to: data.to.uid, message: data.message}).then((result) => {
      io.to(data.from.socket).emit("Message", { type: "sent", user: data.to.nickname, message: data.message});
      io.to(data.to.socket).emit("Message", { from: "received", user: data.from.nickname, message: data.message});
    });
  });
  socket.on("disconnect", function () {
    console.log(UserConnected);
    Object.entries(UserConnected).map((value) => {
      if (value[1].socket == socket.id) {
        delete UserConnected[value[0]];
      }
    })
    io.emit("Users", UserConnected);
  });
});

// Mangoose

const bodyParser = require("body-parser");
const routes = require("./routes/export.route");
const cors = require("cors");

const connectDB = require("./config/Database");
connectDB();

// To parse the body of the request

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:3000"
}));

// API routes

app.use('/api/auth', routes.auth);
app.use('/api/message', routes.message);
app.use('/api/channel', routes.channel);

















// // Mangoose & Routers

// const connectDB = require("./config/Database");
// const routes = require("./routes/export.route");
// const cors = require("cors");
// const logger = require("morgan");
// const fs = require("fs");

// // Connect to the database
// connectDB();

// // Middleware
// // To parse the body of the request
// app.use(express.json());

// // To display the logs in the console
// app.use(logger("dev"));

// // CORS
// // Allow the front to communicate with the Back
// app.use(cors({
//   origin: "http://localhost:3000"
// }));

// // Import API routes
// app.use('/api/auth', routes.auth);
// app.use('/api/user', routes.user);
// // app.use('/api/conversation', routes.conversation);
// app.use('/api/message', routes.message);