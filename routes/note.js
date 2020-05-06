const router = require("express").Router();
const Note = require("../model/Note");
const verify = require("../validators/token_validate");
const { validate_note } = require("../validators");

// checking authrization
router.use(verify);

// getting all notes
router.get("/", (req, res) => {
  const note = Note.find({ user_id: req._sit_map._id }, (err, data) => {
    if (err) {
      return res.send({ Error: err.message });
    }
    res.send(data);
  });
});

// grabing specific note
router.get("/:id", (req, res) => {
  Note.findOne(
    { user_id: req._sit_map._id, _id: req.params.id },
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
  const { error, value } = validate_note(req.body);
  if (error) return res.send({ Error: error.message });
  const note = new Note({
    title: value.title,
    note: value.note,
    user_id: req._sit_map._id,
  });
  note.save((err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// updating specific note
router.patch("/:id", async (req, res) => {
  const { error, value } = validate_note(req.body);
  if (error) return res.send({ Error: error.message });

  await Note.updateOne(
    { user_id: req._sit_map._id, _id: req.params.id },
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
  Note.deleteOne(
    { user_id: req._sit_map._id, _id: req.params.id },
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
  Note.deleteMany(
    { user_id: req._sit_map._id, _id: req.params.id },
    (err, data) => {
      res.send(data);
    }
  );
});

module.exports = router;
