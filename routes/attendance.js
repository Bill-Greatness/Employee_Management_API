const router = require("express").Router();
const Attendance = require("../model/Attendance");
const { validate_attendance } = require("../validators");

router.get("/", (req, res) => {
  Attendance.find((err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// deleting specific attendance
router.delete("/:id", (req, res) => {
  Attendance.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// grabing specific attendance
router.get("/:id", (req, res) => {
  Attendance.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.send({ Error: err.message });
    if (!data) return res.send({ Error: "Not Found" });
    res.send(data);
  });
});

// adding attendance
router.post("/", (req, res) => {
  const { err, value } = validate_attendance(req.body);
  if (err) return res.send({ Error: err.message });
  const attendance = new Attendance(value);
  attendance.save();
  res.send(attendance);
});


module.exports = router;
