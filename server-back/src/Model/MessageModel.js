const mongoose = require("mongoose");
const MessageShema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: String,
  },
  message: {
    type: String,
  },
});

const MessageModel = mongoose.model("Message", MessageShema);
module.exports = MessageModel;
