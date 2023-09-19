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

//admin middleware
const adminMiddleware = require('../middlewares/adminMiddleware.js')

//router
//vender
router.get ("/listadoProducto/:idUser/vender", authMiddleware, adminMiddleware, Controller.sell);
router.post(
    "/listadoProducto/:idUser/vender",
    fileupload.array("imagenProducto", 6),
    validations,
    Controller.public
  );

//detail prod
router.get("/productDetail/:idProd", Controller.prodDetail);

//carrito
router.get("/carrito/:idUser", authMiddleware, Controller.cart);
router.post("/carrito/finalizar", Controller.procesoCompra);

//list prod
router.get("/listadoProducto/:idUser", authMiddleware, adminMiddleware, Controller.list);
router.delete("/listadoProducto/:idUser/delete/:idProd", authMiddleware, Controller.delete);

//edit prod
router.get("/listadoProducto/:idUser/edicionProducto/:idProd", authMiddleware, adminMiddleware, Controller.edit);
router.put(
    "/listadoProducto/:idUser/edicionProducto/:idProd",
    fileupload.array("imagenProducto", 6),
    validations,
    Controller.editProcess
);

//borrar imagen
router.delete("/listadoProducto/:idUser/edicionProducto/:idProd/:idImg", authMiddleware, Controller.processDeleteImg);

//search
router.get("/search", Controller.search);


module.exports = router;