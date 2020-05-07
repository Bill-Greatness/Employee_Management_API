const router = require("express").Router();
const Employee = require("../model/Employee");
const { validate_employee } = require("../validators");
const verify = require("../validators/token_validate");

router.use(verify);

router.get("/", (req, res, next) => {
  Employee.find((err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// grabing specific institution
router.get("/:id", (req, res, next) => {
  Employee.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});
router.get("/:key", (req, res, next) => {
  Employee.findOne({ _id: req.params.key }, (err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// adding institution
router.post("/", (req, res, next) => {
  const { err, value } = validate_employee(req.body);
  if (err) return res.send({ Error: err.message });
  const institution = new Institution(value);
  Employee.save();
  res.send(institution);
});

// updating specific institution
router.put("/:id", (req, res, next) => {
  const { err, value } = validate_employee(req.body);
  if (err) return res.send({ Error: err.message });

  Employee.updateOne({ _id: req.params.id }, value, (err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

router.put("/:key", (req, res, next) => {
  const { err, value } = validate_employee(req.body);
  if (err) return res.send({ Error: err.message });

  Employee.updateOne({ _id: req.params.key }, value, (err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// deleting specific institution
router.delete("/:id", (req, res, next) => {
  Employee.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

router.delete("/:key", (req, res, next) => {
  Employee.deleteOne({ _id: req.params.key }, (err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

module.exports = router;
