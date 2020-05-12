const mongoose = require("mongoose");
const Event = new mongoose.Schema({
  name: {type: String, required: true},
  location: {type: String, required: true},
  date: {type: Date, required: true},
  time: {type: String, required: true},
  description: {type: String, required: true},
  status: {type: String, required: true},
});

module.exports = mongoose.model('Event',Event);
