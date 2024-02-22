const express = require("express");
const mongoose = require("mongoose");
const MessageModel = require("../server-back/Model/MessageModel");

const app = express();
mongoose.connect(
  "mongodb+srv://lamraniotman:lamraniotman000@quark.yu70cdd.mongodb.net/QuarkDb?retryWrites=true&w=majority"
);

app.get("/", async (req, res) => {
  //   res.send("test");
  const message = await MessageModel.find();
  res.json(message);
});

app.listen("3001", () => {
  console.log(" Server is running on port 3001");
});
