const mongoose = require("mongoose");
const uuid = require ('uuid');
const Employee = new mongoose.Schema({
  first_name: { type: String, required: true },
  middle_name: { type: String, required: true },
  last_name: { type: String, required: true },
  gender: { type: String, required: true },
  last_institution: { type: String, required: true },
  phone: { type: String, required: true },
  marital_Stutus: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  location: { type: String, required: true },
  department: { type: String, required: true },
  photo_url: { type: String, required: true },
  key: {
    type: String,
    default: uuid.v4(),
  },
});

module.exports = mongoose.model("Employee", Employee);
