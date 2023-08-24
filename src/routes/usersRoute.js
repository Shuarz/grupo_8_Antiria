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

//admin middleware
const adminMiddleware = require('../middlewares/adminMiddleware.js')

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

//list prod
router.get("/listadoUser", authMiddleware, adminMiddleware, Controller.list);
router.delete("/listadoUser/delete/:idUser", authMiddleware, Controller.delete);

module.exports = router;