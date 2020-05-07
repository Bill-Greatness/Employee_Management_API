const mongoose = require("mongoose");
const Comment = require("./Comment");

const Attendance = new mongoose.Schema({
  trainer_id: { type: String, required: true },
  date: { type: Date, required: true },
  topic: { type: String, required: true },
  comments: { type: Comment, required: false },
});
module.exports = mongoose.model("Attendance", Attendance);
