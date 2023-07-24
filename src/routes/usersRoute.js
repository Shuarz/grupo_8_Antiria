const express = require('express');
const router = express.Router();

//controller
const Controller = require('../controller/usersController.js');

//multer
const fileupload = require('../middlewares/multerUserMiddleware.js');

//validar
const validations = require('../middlewares/registerMiddleware.js');

//session / logged / profile
const guestMiddleware = require('../middlewares/guestMiddleware.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

//register
router.get("/registro", guestMiddleware, Controller.register);
router.post("/registro", fileupload.single('avatar'), validations, Controller.processRegister);

//login
router.get("/login", guestMiddleware, Controller.login);
router.post("/login",  Controller.loginProcess);

//profile
router.get("/profile", authMiddleware, Controller.profile);

//logout
router.get("/logout", Controller.logout);

//help
router.get("/help", Controller.help);

module.exports = router;