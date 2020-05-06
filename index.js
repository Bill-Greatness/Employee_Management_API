const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const env = require("dotenv");

// importing Route
const authRoute = require("./routes/auth");
const noteRoute = require("./routes/note");
const messageRoute = require("./routes/message");
const institutionRoute = require("./routes/institution");

env.config();

// connecting to db
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }, () =>
  console.log("db connected")
);

// middlewares
app.use(express.json());

//invoking routes path (midleware)
app.use("/api/account", authRoute);
app.use("/api/note", noteRoute);
app.use("/api/msg", messageRoute);
app.use("/api/inst",institutionRoute);

// runing Server
app.listen(3000, () => console.log("Server Running 3000"));
