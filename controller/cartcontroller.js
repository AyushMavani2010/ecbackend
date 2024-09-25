const cartmodel = require('../model/cartmodel')
exports.addcart = async (req, res) => {
    var data = await cartmodel.create(req.body)
    res.status(200).json({
        status: "success",
        data
    })
}
exports.viewcart = async (req, res) => {
    var data = await cartmodel.find()
    res.status(200).json({
        status: "success",
        data
    })
}
exports.delCart = async (req, res) => {
    var delid = req.params.id
    console.log(delid);
    var data = await cartmodel.findByIdAndDelete(delid)
    res.status(200).json({
        status: "Success",
        data
    })
}

