require("dotenv").config();
const express = require("express");
const socket = require("socket.io");
const path = require("path");
const logger = require("./middleware/logger");
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

  client.on("USER_JOIN", ({ username, room }) => {
    const user = userJoin(client.id, username, room);
    // Broadcast when a user connects
    console.log("room", room);
    client.join(user.room);

    client.broadcast
      .to(user.room)
      .emit(
        "SERVER_MESSAGE",
        formatMessage(botName, `${user.username} has joined the room`)
      );

    // Send users and room info

    // Send users and room info
    io.to(user.room).emit("ROOM_USERS", {
      room: user.room,
      users: getRoomUsers(user.room),
    });

    // client.broadcast.emit(
    //   "SERVER_MESSAGE",
    //   formatMessage(botName, "User has joined the chat.")
    // );

    // Send initial message to Chat and username as it is confirmation of good connection
    client.emit("SERVER_REGISTER", {
      botMessage: formatMessage(botName, "Welcome to Cyberchat!"),
      username: username,
    });
  });

  // Runs when client disconnects
  client.on("disconnect", () => {
    const user = userLeave(client.id);
    if (user) {
      io.to(user.room).emit(
        "SERVER_MESSAGE",
        formatMessage(botName, `${user.username} has left the room`)
      );

      // Send users and room info
      io.to(user.room).emit("ROOM_USERS", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });

  // Listen for chatMessage
  client.on("USER_MESSAGE", (message) => {
    const user = getCurrentUser(client.id);
    console.log("received: ", message);
    io.to(user.room).emit("SERVER_MESSAGE", message);
  });
});
