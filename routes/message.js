const router = require("express").Router();
const jwt = require("jsonwebtoken");
const Message = require("../model/Message");
const verify = require("../validators/token_validate");
const { validate_message } = require("../validators");

router.use(verify);

// getting all message
router.get("/", (req, res) => {
  Message.find(
    { $or: [{ to: req._sit_map }, { from: req._sit_map }] },
    (err, data) => {
      if (err) return err;
      res.send(data);
    }
  );
});

// grabing specific message
router.get("/:id", (req, res) => {
  Message.findOne(
    {
      $and: [
        { _id: req.body.id },
        { $or: [{ to: req._sit_map._id }, { from: req._sit_map._id }] },
      ],
    },
    (err, data) => {
      if (err) return res.send({ Error: err.message });
      res.send(data);
    }
  );
});

// adding message
router.post("/", (req, res) => {
  const { error, value } = validate_message(req.body);
  if (error) return res.send({ Error: error.message });
  const message = new Message({
    from: req._sit_map._id,
    to: value.to,
    message: value.message,
  });
  message.save();
  res.send(message);
});

// updating specific message
router.post("/:id", (req, res) => {});

// deleting specific message
router.delete("/:id", (req, res) => {});

// deleting all message
router.delete("/", (req, res) => {});

// grabing specific recived message
router.get("/:from", (req, res) => {});

// grabing specific sent message
router.get("/:to", (req, res) => {});

module.exports = router;
