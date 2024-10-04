const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: String },
  total: { type: String },
});
module.exports = mongoose.model("payment", paymentSchema);
