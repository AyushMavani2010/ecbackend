const paymentModel = require("../model/paymentmodel");
exports.createPay = async (req, res) => {
  try {
    const data = await paymentModel.create(req.body);
    res.status(200).json({
      status: "Success",
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Payment failed",
    });
  }
};

exports.viewPay = async (req, res) => {
  try {
    const data = await paymentModel.find();
    res.status(200).json({
      status: "Success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "Error retrieving payments",
    });
  }
};
