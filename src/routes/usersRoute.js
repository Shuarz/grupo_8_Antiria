const express = require('express');
const router = express.Router();
const userController = require('../controller/usersController.js');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/userImg'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = 'user-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const fileupload = multer({ storage: storage });

router.get("/login", userController.login);
router.get("/registro", userController.registro);
router.post("/registro",fileupload.single('imagenUser'), userController.create);

module.exports = router;