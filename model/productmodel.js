const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  image: { type: String },  
});

module.exports = mongoose.model('product', productSchema);
