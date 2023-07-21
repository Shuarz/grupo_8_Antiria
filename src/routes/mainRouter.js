const express = require("express");
const router = express.Router();
const Controller = require("../controller/mainController");

router.get("/", Controller.index);
router.post("/", Controller.contacto)



module.exports = router;
