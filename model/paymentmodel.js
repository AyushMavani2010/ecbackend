const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true },
  expiryDate: { type: String, required: true },
  cvv: { type: String, required: true },
  billingAddress: { type: String, required: true },
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Payment", paymentSchema);
