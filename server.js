require("dotenv").config();
const express = require("express");
const socket = require("socket.io");
const path = require("path");
const logger = require("./middleware/logger");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(logger);
app.use(express.json());

//  GET home page of Server
app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// An api endpoint that returns a short list of items
app.get("/api/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

// Handles any requests that don't match the ones above
app.get("/*", (req, res) => {
  res.status(400).sendFile(path.join(__dirname, "404.html"));
});

const server = app.listen(PORT, () => {
  console.log("Listening on", PORT);
});

io = socket(server);

io.on("connection", (client) => {
  console.log(client.id);

  // Welcome current user
  client.emit("message", "Welcome to Cyberchat!");

  // Broadcast when a user connects
  client.broadcast.emit("message", "User has joined the chat");

  // Runs when client disconnects
  client.on("disconnect", () => {
    io.emit("message", "A user has left the chat");
  });

  // Listen for chatMessage
  client.on("chatMessage", (message) => {
    console.log(message);
    io.emit("message", message);
  });
});
