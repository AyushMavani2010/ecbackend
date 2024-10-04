const paymentmodel = require("../model/paymentmodel");

exports.createPay = async (req, res) => {
  var data = await paymentmodel.create(req.body);
  res.status(200).json({
    status: "Success",
    data,
  });
};
exports.viewPay = async (req, res) => {
  var data = await paymentmodel.find();
  res.status(200).json({
    status: "Success",
    data,
  });
};

exports.cancelorder = async (req, res) => {
  console.log("Hii");
  var data = req.body;
  console.log(data.length);

  res.status(200).json({
    status: "Success",
  });
};
