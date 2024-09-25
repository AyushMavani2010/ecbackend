const mongoose=require('mongoose')
const cartSchema=new mongoose.Schema({
    id:{type:String},
    img:{type:String},
    kcal:{type:String},
    price:{type:String},
    tall:{type:String},
    title:{type:String},
})
module.exports=mongoose.model('cart',cartSchema)
