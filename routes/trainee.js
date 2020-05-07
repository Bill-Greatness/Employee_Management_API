const router = require("express").Router();
const Trainee = require("../model/Trainee");
const { validate_trainee } = require("../validators");

router.get("/", (req, res, next) => {
  Trainee.find((err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// grabing specific note
router.get("/:id", (req, res, next) => {
  Trainee.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.send({ Error: err.message });
    if (!data) return res.send({ Error: "Not Found" });
    res.send(data);
  });
});

// adding note
router.post("/", (req, res, next) => {
  const { err, value } = validate_trainee(req.body);
  if (err) return res.send({ Error: err.message });
  const trainee = new Trainee(value);
  trainee.save();
  res.send(trainee);
});

// updating specific note
router.post("/:id", (req, res, next) => {
  Trainee.updateOne({ _id: id }, req.body, (err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// deleting specific note
router.delete("/:id", (req, res, next) => {
  Trainee.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

module.exports = router;
