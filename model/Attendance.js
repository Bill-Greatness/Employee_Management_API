const mongoose = require("mongoose");


const Attendance = new mongoose.Schema({
  employee_id: { type: String, required: true },
  date: { type: Date, required: true ,default:Date.now},
  meeting_id: { type: String, required: true },
});
module.exports = mongoose.model("Attendance", Attendance);
