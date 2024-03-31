const mongoose = require("mongoose");
const EventSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
});

const EventModel = mongoose.model("Event", EventSchema);
module.exports = EventModel;
