const express = require('express');
const router = express.Router();

//controller
const Controller = require('../controller/productsController.js');

//multer
const fileupload = require('../middlewares/multerProdMiddleware.js');

//validar
const validations = require('../middlewares/createProdMiddleware.js');

//session / logged
const authMiddleware = require('../middlewares/authMiddleware.js');

//router
//vender
router.get ("/listadoProducto/:idUser/vender", authMiddleware, Controller.sell);
router.post("/listadoProducto/:idUser/vender", fileupload.single("imagenProducto"), validations,Controller.public);

//detail prod
router.get("/productDetail/:IdProd", Controller.prodDetail);

//carrito
router.get("/carrito/:idUser", authMiddleware, Controller.cart);

//list prod
router.get("/listadoProducto/:idUser", authMiddleware, Controller.list);
router.get("/listadoProducto/:idUser/delete/:IdProd", authMiddleware, Controller.eliminar);

//edit prod
router.get("/listadoProducto/:idUser/edicionProducto/:IdProd", authMiddleware, Controller.editarProducto);
router.put("/listadoProducto/:idUser/edicionProducto/:IdProd", fileupload.single("imagenProducto") , Controller.editarProceso);

//search
router.get("/search", Controller.search);

//delete prod
router.post('/eliminar', Controller.delete);

module.exports = router;