import mongoose from "mongoose";
const File = new mongoose.Schema({
  name: {type: String, required: true},
  date: {type: Date, required: true},
  user_id: {type: String, required: true},
});

module.exports = mongoose.model("File", File);
