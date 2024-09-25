const mongoose = require('mongoose')
const confpaySchema = new mongoose.Schema({
    // id:{type:String},
    kcal: { type: String },
    price: { type: String },
    tall: { type: String },
    title: { type: String },
    status: { type: String, default: "Confirm" },
    name:String
})
module.exports = mongoose.model('Confirmpayment', confpaySchema)
