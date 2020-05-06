const router = require("express").Router();
const Institution = require("../model/Institution");
const { validate_institution } = require("../validators");
const verify = require("../validators/token_validate");

router.use(verify);

router.get("/", (req, res, next) => {
  Institution.find((err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// grabing specific institution
router.get("/:id", (req, res, next) => {
  Institution.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// adding institution
router.post("/", (req, res, next) => {
  const { err, value } = validate_institution(req.body);
  if (err) return res.send({ Error: err.message });
  const institution = new Institution(value);
  institution.save();
  res.send(institution);
});

// updating specific institution
router.post("/:id", (req, res, next) => {
  const { err, value } = validate_institution(req.body);
  if (err) return res.send({ Error: err.message });

  Institution.updateOne({ _id: req.params.id }, value, (err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// deleting specific institution
router.delete("/:id", (req, res, next) => {
  Institution.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// deleting all institution
router.delete("/", (req, res, next) => {
  Institution.deleteMany({}, (err, data) => {
    if (err) return res.send({ Error: err.message }), res.send(data);
  });
});

module.exports = router;
