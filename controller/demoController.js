const demoModel = require("../model/demo");

exports.addDemo = async (req, res) => {
  var data = await demoModel.create(req.body);
  res.status(200).json({
    status: "success",
    data,
  });
};

exports.viewDemo = async (req, res) => {
  var data = await demoModel.find();
  res.status(200).json({
    status: "success",
    data,
  });
};
