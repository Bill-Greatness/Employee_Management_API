import mongoose from "mongoose";
const Event = new mongoose.Schema({
  name: {},
  location: {},
  date: {},
  time: {},
  description: {},
  status: {},
});

module.exports = mongoose.model('Event',Event);
