const mongoose = require("mongoose");
const demoSchema = new mongoose.Schema({
  name: { type: String },
});
module.exports = mongoose.model("demo", demoSchema);
