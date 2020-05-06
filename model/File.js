import mongoose from "mongoose";
const File = new mongoose.Schema({
  name: {},
  date: {},
  user_id: {},
});

module.exports = mongoose.model("File", File);
