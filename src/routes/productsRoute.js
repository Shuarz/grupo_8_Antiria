const express = require('express');
const router = express.Router();
const Controller = require('../controller/productsController.js');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = 'product-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const fileupload = multer({ storage: storage });

//router
router.get("/carrito", Controller.carrito);
router.get("/productDetail/:id", Controller.detalleProducto);
router.get("/listadoProducto/:id", Controller.listado);
router.get("/listadoProducto/:id/delete/:idprod", Controller.eliminar);
router.get ("/listadoProducto/:id/vender", Controller.vender);
router.post("/listadoProducto/:id/vender", fileupload.single("imagenProducto") ,Controller.publicado);
router.get("/listadoProducto/:id/edicionProducto/:idprod", Controller.editarProducto);
router.put("/listadoProducto/:id/edicionProducto/:idprod", fileupload.single("imagenProducto") , Controller.editarProceso);

router.post('/eliminar', (req, res) => {
    const id = req.body.id;
    Controller.eliminar(id);
    res.redirect('/listadoProducto');
  });

module.exports = router;