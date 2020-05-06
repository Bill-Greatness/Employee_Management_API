const router = require("express").Router();
const jwt = require("jsonwebtoken");
const Message = require("../model/Message");
const verify = require("../validators/token_validate");

router.use(verify);

// getting all message
router.get("/", (req, res, next) => {
  Message.find({ _id: req._sit_map._id }, (err, data) => {
    if (err) return err;
    res.send(data);
  });
});

// grabing specific message
router.get("/:id", (req, res, next) => {});

// adding message
router.post("/", (req, res, next) => {});

// updating specific message
router.post("/:id", (req, res, next) => {});

// deleting specific message
router.delete("/:id", (req, res, next) => {});

// deleting all message
router.delete("/", (req, res, next) => {});

// grabing specific recived message
router.get("/:from", (req, res, next) => {});

// grabing specific sent message
router.get("/:to", (req, res, next) => {});

module.exports = router;
