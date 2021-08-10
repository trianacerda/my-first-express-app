console.log("hello you!");
//imports are different in Node
const express = require("express");
const app = express();
const data = require("./data.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/animals", (req, res) => {
  res.json(data);
});

app.get("/animals/:id", (req, res) => {
  const id = Number(req.params.id);
  const animalId = data.find((item) => item.id === id);
  res.json(animalId);
});
module.exports = app;
