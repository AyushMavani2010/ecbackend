const productModel = require("../model/productmodel");

exports.addProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    const imagePath = req.file ? req.file.path : null;

    const data = await productModel.create({
      name,
      price,
      image: imagePath,
    });

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

exports.viewProduct = async (req, res) => {
  try {
    const data = await productModel.find();
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};
