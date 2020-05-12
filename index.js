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
const paymentRoute = require("./routes/payment");
const employeeRoute = require("./routes/emplayee");
const traineeRoute = require("./routes/trainee");
const assignRoute = require("./routes/assignment");

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
app.use("/api/inst", institutionRoute);
app.use("/api/pay", paymentRoute);
app.use("/api/employee", employeeRoute);
app.use("api/trainee", traineeRoute);
app.use("api/assign", assignRoute);

// runing Server
app.listen(3000, () => console.log("Server Running 3000"));
