var express = require("express");
const { addCart, viewCart, delCart } = require("../controller/cartcontroller");
const { adduser, login } = require("../controller/regcontroller");
const { createPay, viewPay } = require("../controller/paymentController");
const { confirmPay } = require("../controller/confPayController");
const { adminlogin, addadmin } = require("../controller/admincontroller");
const { addProduct } = require("../controller/productController");
const { viewProduct } = require("../controller/productController");
var router = express.Router();

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
    ts;
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload an image."), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/cart", addCart);
router.get("/cart", viewCart);
router.post("/adduser", adduser);
router.post("/adduser", adduser);
router.post("/login", login);
router.delete("/cart/:id", delCart);
router.post("/addpay", createPay);
router.get("/viewpay", viewPay);
router.post("/confirmpay", confirmPay);
router.post("/addadmin", addadmin);
router.post("/adminlogin", adminlogin);
router.post("/product", upload.single("image"), addProduct);
router.get("/product", viewProduct);
router.post("/payment", createPay);
router.get("/payment", viewPay);

module.exports = router;
