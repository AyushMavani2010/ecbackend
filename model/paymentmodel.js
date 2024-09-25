const mongoose=require('mongoose')
const paymentSchema=new mongoose.Schema({
    // id:{type:String},
    kcal:{type:String},
    price:{type:String},
    tall:{type:String},
    title:{type:String},
})
module.exports=mongoose.model('payment',paymentSchema)
