const express = require('express');
const router = express.Router();
const Controller = require('../controller/productsController.js');


router.get("/carrito", Controller.carrito);
router.get("/productDetail", Controller.detalleProducto);
router.get ("/vender", Controller.vender);

module.exports = router;