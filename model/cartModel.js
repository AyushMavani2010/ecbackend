const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  image: { type: String },
  price: { type: String },
  p_id: { type: String },
});
module.exports = mongoose.model("cart", cartSchema);
