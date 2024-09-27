const cartModel = require('../model/cartModel')
exports.addCart = async (req, res) => {
    var data = await cartModel.create(req.body)
    res.status(200).json({
        status: "success",
        data
    })
}
exports.viewCart = async (req, res) => {
    var data = await cartModel.find()
    res.status(200).json({
        status: "success",
        data
    })
}
exports.delCart = async (req, res) => {
    var deleteId = req.params.id
    console.log(deleteId);
    var data = await cartModel.findByIdAndDelete(deleteId)
    res.status(200).json({
        status: "Success",
        data
    })
}

