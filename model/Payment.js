import mongoose from "mongoose";

const Payment = new mongoose.Schema({
  key: { type: String, required: false },
  employee_id: { type: String, required: true },
  date: { type: Date, required: true },
  transaction_code: { type: String, required: true },
  amount: { type: String, required: true },
});

module.exports = mongoose.model("Payment", Payment);
