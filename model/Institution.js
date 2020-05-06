const mongoose = require("mongoose");

const Institution = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  phone: {
    type: String,
    required: true,
    min: 12,
    max: 255,
  },
  loaction: {
    type: String,
    required: true,
  },
  computers: {
    type: String,
    required: true,
  },
  students: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  registrant: {
    type: String,
    required: true,
  },
  registrant_phone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Institution',Institution);