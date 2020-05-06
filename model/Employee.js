import mongoose from "mongoose";
// const moongoose = require('mongoose')

const Employee = new mongoose.Schema({
  first_name: {},
  middle_name: {},
  last_name: {},
  gender: {},
  last_institution: {},
  phone: {},
  marital_Stutus: {},
  email: {},
  dob: {},
  location: {},
  department: {},
  photo_url: {},
});

module.exports = mongoose.model('Employee',Employee);
