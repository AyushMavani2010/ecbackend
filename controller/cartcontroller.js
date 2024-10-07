const cartModel = require("../model/cartModel");

// Add an item to the cart
exports.addCart = async (req, res) => {
  var data = await cartModel.create(req.body);
  res.status(200).json({
    status: "success",
    data,
  });
};

// View the cart items
exports.viewCart = async (req, res) => {
  var data = await cartModel.find();
  res.status(200).json({
    status: "success",
    data,
  });
};

// Delete all items in the cart for a specific user
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
    const itemId = req.params.itemId; // Extract itemId from URL parameters
    const deletedItem = await cartModel.findByIdAndDelete(itemId); // Delete item by ID

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" }); // Handle case where item doesn't exist
    }

    res.status(200).json({ message: "Item deleted successfully", deletedItem });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete item from cart" });
  }
};
