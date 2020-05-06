import mongoose from "mongoose";
const Assignment = new mongoose.Schema({
  trainer_id: {},
  school: {},
  role: {},
  student_no: {},
});

module.exports = mongoose.model('Assignment',Assignment);
