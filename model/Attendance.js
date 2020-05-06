import mongoose from "mongoose";
const Attendance = new mongoose.Schema({
  trainer_id: {},
  date: {},
  topic: {},
  comments: {},
});
module.exports = mongoose.model('Attendance',Attendance);
