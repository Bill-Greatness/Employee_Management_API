const router = require("express").Router();
const Assignment = require("../model/Assignment");
const verify = require("../validators/token_validate");
const { validate_assignment } = require("../validators");

// checking authrization
router.use(verify);

// getting all notes
router.get("/", (req, res) => {
  const assignment = Assignment.find({ employee_id: req._sit_map._id }, (err, data) => {
    if (err) {
      return res.send({ Error: err.message });
    }
    res.send(data);
  });
});

// grabing specific note
router.get("/:id", (req, res) => {
    Assignment.findOne(
    { employee_id: req._sit_map._id, _id: req.params.id },
    (err, data) => {
      if (err) {
        return res.send({ Error: "Not Found" });
      }
      res.send({ Error: "", data: data });
    }
  );
});

// adding note
router.post("/", (req, res) => {
  const { error, value } = validate_assignment(req.body);
  if (error) return res.send({ Error: error.message });
  const assignment = new Assignment({
    ...value
  });
  assignment.save((err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// updating specific note
router.patch("/:id", async (req, res) => {
  const { error, value } = validate_assignment(req.body);
  if (error) return res.send({ Error: error.message });

  await Assignment.updateOne(
    { employee_id: req._sit_map._id, _id: req.params.id },
    value,
    (err, data) => {
      if (err) {
        return res.send({ Error: err.message });
      }
      res.send(data);
    }
  );
});

// deleting specific note
router.delete("/:id", (req, res) => {
  Assignment.deleteOne(
    { employee_id: req._sit_map._id, _id: req.params.id },
    (err, data) => {
      if (err) {
        return res.send({ Error: err.message });
      }
      res.send(data);
    }
  );
});

// deleting all note
router.delete("/", (req, res, next) => {
    Assignment.deleteMany(
    { employee_id: req._sit_map._id, _id: req.params.id },
    (err, data) => {
      res.send(data);
    }
  );
});

module.exports = router;
