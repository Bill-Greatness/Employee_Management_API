const mongoose = require("mongoose");

const note = new mongoose.Schema({
  user_id: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Note", note);
