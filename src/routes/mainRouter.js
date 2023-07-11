const express = require("express");
const router = express.Router();
const controller = require("../controller/mainController");

router.get("/", controller.index);
router.post("/", controller.contacto)



module.exports = router;
