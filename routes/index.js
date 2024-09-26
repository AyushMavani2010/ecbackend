var express = require("express");
const { addcart, viewcart, delCart } = require("../controller/cartcontroller");
const { adduser, login } = require("../controller/regcontroller");
const {
  createPay,
  viewPay,
  cancelorder,
} = require("../controller/paymentController");
const {
  confirmPay,
  confirmPayv,
  delete_cart,
} = require("../controller/confPayController");
const { adminlogin, addadmin } = require("../controller/admincontroller");
const { addProduct } = require("../controller/productController");
const { viewProduct } = require("../controller/productController");
var router = express.Router();


const multer = require("multer");
const path = require("path");

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder to save the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // ensure a unique file name
  },
});

// File filter for only accepting images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload an image."), false);
  }
};

// Multer middleware for image upload
const upload = multer({ storage: storage, fileFilter: fileFilter });


/* GET home page. */
router.post("/addcart", addcart);
router.get("/cart", viewcart);
router.post("/adduser", adduser);
router.post("/adduser", adduser);
router.post("/login", login);
router.delete("/delcart/:id", delCart);
router.post("/addpay", createPay);
router.get("/viewpay", viewPay);
router.post("/cancleorder", cancelorder);
router.post("/confirmpay", confirmPay);
router.get("/viewconfirmpay", confirmPayv);
router.post("/addadmin", addadmin);
router.post("/adminlogin", adminlogin);
router.get("/delete_cart", delete_cart);
router.post("/product", upload.single("image"), addProduct);
router.get("/product", viewProduct);
module.exports = router;
