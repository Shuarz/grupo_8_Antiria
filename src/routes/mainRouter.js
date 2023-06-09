const express = require("express");
const router = express.Router();

const controller = require("../controller/mainController");

router.get("/", controller.index);
router.get("/carrito", controller.carrito);
router.get("/productDetail", controller.detalleProducto);
router.get("/login", controller.login);
router.get("/registro", controller.registro);
router.get ("/vender", controller.vender);

module.exports = router;

