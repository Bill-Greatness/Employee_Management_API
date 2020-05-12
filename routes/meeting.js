const router = require("express").Router();
const Meeting = require("../model/Meeting");
const { validate_attendance } = require("../validators");
const Attendance = require("../model/Attendance");
const Comment = require("../model/Comment");
router.get("/", (req, res) => {
  Meeting.find((err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// deleting specific attendance
router.delete("/:id", (req, res) => {
  Meeting.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// grabing specific attendance
router.get("/:id", (req, res) => {
  Meeting.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.send({ Error: err.message });
    if (!data) return res.send({ Error: "Not Found" });
    res.send(data);
  });
});

// adding attendance
router.post("/", (req, res) => {
  const { err, value } = validate_attendance(req.body);
  if (err) return res.send({ Error: err.message });
  const meeting = new Meeting(value);
  meeting.save();
  res.send(meeting);
});

router.get("/:id/attendance", (req, res) => {
  Meeting.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.send({ Error: err.message });
    Attendance.find({ meeting_id: data._id }, (erro, value) => {
      if (erro) return res.send({ Error: erro.message });
      if (!value) return res.send([]);
      res.send(value);
    });
  });
});

router.get("/:id/comments", (req, res) => {
    Meeting.findOne({ _id: req.params.id }, (err, data) => {
      if (err) return res.send({ Error: err.message });
      Comment.find({ meeting_id: data._id }, (erro, value) => {
        if (erro) return res.send({ Error: erro.message });
        if (!value) return res.send([]);
        res.send(value);
      });
    });
  });
  

module.exports = router;
