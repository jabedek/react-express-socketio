require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
const logger = require("./middleware/logger");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger);
app.use(express.json());

// Serve the static files from the React app (like icons???????)
// app.use(express.static(path.join(__dirname, "client/build")));

// GET home page of Server
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

app.listen(PORT, () => {
  console.log("Listening on", PORT);
});
