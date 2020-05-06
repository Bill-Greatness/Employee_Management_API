import mongoose from "mongoose";

const Payment = new mongoose.Schema({
  date: {},
  transaction_code: {},
  ammount: {},
});

module.exports = mongoose.model('Payment',Payment);
