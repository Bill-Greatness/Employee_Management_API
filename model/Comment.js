const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  meeting_id:{
    type:String,
    required:true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
