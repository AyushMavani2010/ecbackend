const pay = require('../model/confPay')
const cart = require('../model/cartmodel')
exports.confirmPay = async (req,res)=>{
    console.log("DELETE");
    await cart.deleteMany({});
    var data = await pay.create(req.body)
    res.status(200).json({
        status:"Success Pay",
        data
    })
}

exports.delete_cart = async (req,res)=>{
    console.log("DELETE");
    await cart.deleteMany({});
    res.status(200).json({
        status:"DONE",
    })
}

exports.confirmPayv = async (req,res)=>{
    var data = await pay.find()
    res.status(200).json({
        status:"Success",
        data
    })
}