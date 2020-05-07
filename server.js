require("dotenv").config();
const express = require("express");
const socket = require("socket.io");
const path = require("path");
const logger = require("./middleware/logger");
const moment = require("moment");
const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

const PORT = process.env.PORT || 5000;

const app = express();

const botName = "Cyberchat";

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

  // Runs when client disconnects
  client.on("disconnect", () => {
    io.emit(
      "SERVER_MESSAGE",
      formatMessage(botName, "A user has left the room.")
    );
  });

  client.on("USER_CONN", (message) => {
    // Broadcast when a user connects
    client.broadcast.emit(
      "SERVER_MESSAGE",
      formatMessage(botName, "User has joined the chat.")
    );

    // Send initial message to Chat and username as it is confirmation of good connection
    client.emit("SERVER_REGISTER", {
      botMessage: formatMessage(botName, "Welcome to Cyberchat!"),
      username: message.username,
    });
  });

  // Listen for chatMessage
  client.on("USER_MESSAGE", (message) => {
    console.log("received: ", message);
    io.emit("SERVER_MESSAGE", message);
  });
});
