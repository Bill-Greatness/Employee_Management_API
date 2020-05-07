import mongoose from "mongoose";
const Assignment = new mongoose.Schema({
  trainer_id: { type: String, required: true },
  school: { type: String, required: true },
  role: { type: String, required: true },
  student_no: { type: String, required: true },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Assignment", Assignment);
