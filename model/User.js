const mongoose = require("mongoose");

const user = new mongoose.Schema({
  key: {
    /*
    this can be used to request login
    hence if one is not yet a registerd on the service they can request a key, 
    and a membership form will be handed to the to file
    */
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("User", user);
