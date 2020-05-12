const mongoose = require("mongoose");

const Meeting = mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
