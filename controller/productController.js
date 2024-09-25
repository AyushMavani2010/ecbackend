const productModel = require("../model/productmodel");
exports.addProduct = async (req, res) => {
  var data = await productModel.create(req.body);
  res.status(200).json({
    status: "success",
    data,
  });
};
exports.viewProduct = async (req, res) => {
  var data = await productModel.find();
  res.status(200).json({
    status: "success",
    data,
  });
};
