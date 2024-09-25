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

const { addDemo, viewDemo } = require("../controller/demoController");

var router = express.Router();

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
router.post("/addProduct", addProduct);
router.get("/viewProduct", viewProduct);
router.post("/addDemo", addDemo);
router.get("/viewDemo", viewDemo);
module.exports = router;
