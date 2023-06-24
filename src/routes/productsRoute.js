const express = require('express');
const router = express.Router();

const Controller = require('../controller/productsController.js');
const multer= require('multer');
const path = require('path')
const storage = multer.diskStorage({
    destination:(req, res ,cb)=>[
        cb(null, path.join(__dirname,'../public/img'))
    ],
    filename:(req,file,cd)=>{
        console.log(file)

        const newfilename = ""; 
        cd(null, newfilename)
    }
});

const upload = multer({storage});
router.get("/carrito", Controller.carrito);
router.get("/productDetail/:id", Controller.detalleProducto);
router.get ("/vender", Controller.vender);
router.post("/vender", upload.single("imagenProducto") ,Controller.publicado);

module.exports = router;