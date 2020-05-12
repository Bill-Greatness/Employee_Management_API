const router = require("express").Router();
const Payment = require("../model/Payment");
const verify = require("../validators/token_validate");
const { validate_payment } = require("../validators");

// checking authrization
router.use(verify);

// getting all payments
router.get("/", (req, res) => {
  const payment = Payment.find(
    { $or: [{ employee_id: req._sit_map._id }, { key: req._sit_map._id }] },
    (err, data) => {
      if (err) {
        return res.send({ Error: err.message });
      }
      res.send(data);
    }
  );
});

// grabing specific payment
router.get("/:id", (req, res) => {
  Payment.findOne({ _id: req.params.id }, (err, data) => {
    if (err) {
      return res.send({ Error: "Not Found" });
    }
    res.send({ Error: "", data: data });
  });
});

// adding payment
router.post("/", (req, res) => {
  const { error, value } = validate_payment(req.body);
  if (error) return res.send({ Error: error.message });
  const payment = new Payment({
    ...value,
  });
  payment.save((err, data) => {
    if (err) return res.send({ Error: err.message });
    res.send(data);
  });
});

// updating specific payment
router.patch("/:id", async (req, res) => {
  const { error, value } = validate_payment(req.body);
  if (error) return res.send({ Error: error.message });

  await Payment.updateOne({ _id: req.params.id }, { ...value }, (err, data) => {
    if (err) {
      return res.send({ Error: err.message });
    }
    res.send(data);
  });
});

// deleting specific payment
router.delete("/:id", (req, res) => {
  Payment.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) {
      return res.send({ Error: err.message });
    }
    res.send(data);
  });
});

module.exports = router;
