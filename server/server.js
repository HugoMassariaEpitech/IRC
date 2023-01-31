// Il faudrait une config eslint pour forcer les bonnes pratiques
// Trier dans l'ordre alphabétique les imports

const express = require("express");
const connectDB = require("./config/Database");
const cookieParser = require("cookie-parser");
const routes = require("./routes/export.route");
const cors = require("cors");
const logger = require("morgan");
const fs = require("fs");
const socketIO = require("./socket.io");



// Variables
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Create the Express app
const app = express();

// Middleware
// To parse the body of the request
app.use(express.json());

// Log
// To store the logs in a file
// app.use(logger("dev"), {
//   stream: fs.createWriteStream("./access.log", { flags: "a" })
// });
// To display the logs in the console
app.use(logger("dev"));

// CORS
// Allow the front to communicate with the Back
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

// Cookies
app.use(cookieParser());



// Import API routes
console.log("server")
app.use('/api/auth', routes.auth);
app.use('/api/user', routes.user);
app.use('/api/conversation', routes.conversation);
app.use('/api/message', routes.message);


// Swagger
// swaggerDocs(app, PORT)

// Start the server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

// J'sais pas si je dois pass app comme arg sachant que je l'importe dans socket.io.js
// socketIO(app);

module.exports = app;