const express = require("express");
const router = express.Router();

const controller = require("../controller/mainController");

router.get("/", controller.index);
router.get("/", controller.detalleProducto);

module.exports = router;

