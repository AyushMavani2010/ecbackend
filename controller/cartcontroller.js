const cartModel = require("../model/cartModel");

// Add an item to the cart
exports.addCart = async (req, res) => {
  var data = await cartModel.create(req.body);
  res.status(200).json({
    status: "success",
    data,
  });
};

exports.viewCart = async (req, res) => {
  var data = await cartModel.find();
  res.status(200).json({
    status: "success",
    data,
  });
};

exports.delCart = async (req, res) => {
  try {
    const userId = req.params.userId;
    await cartModel.deleteMany({ userId });
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete cart" });
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const deletedItem = await cartModel.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted successfully", deletedItem });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete item from cart" });
  }
};
