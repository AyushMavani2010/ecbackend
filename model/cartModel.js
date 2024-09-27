const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  image: { type: String },
  price: { type: String },
});
module.exports = mongoose.model("cart", cartSchema);
