const express = require('express');
const router = express.Router();
const userController = require('../controller/usersController.js');

router.get("/login", userController.login);
router.get("/registro", userController.registro);
router.get("/tusventas", userController.tusventas)
router.post("/registro", userController.regisrado)

module.exports = router;