const mongoose=require('mongoose')
const regSchema=new mongoose.Schema({
    id:{type:String},
    name:{type:String},
    email:{type:String},
    contact:{type:String},
    password:{type:String}
})
module.exports=mongoose.model('reg',regSchema)
