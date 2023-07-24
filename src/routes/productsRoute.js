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
router.get("/productDetail/:idProd", Controller.prodDetail);
router.post("/productDetail/:idProd/:idUser", authMiddleware, Controller.addToCartUser);

//carrito
router.get("/carrito/:idUser", authMiddleware, Controller.cart);
router.get("/carrito/:idUser/:idProd", authMiddleware, Controller.deleteToCart);

//list prod
router.get("/listadoProducto/:idUser", authMiddleware, Controller.list);
router.get("/listadoProducto/:idUser/delete/:idProd", authMiddleware, Controller.delete);

//edit prod
router.get("/listadoProducto/:idUser/edicionProducto/:idProd", authMiddleware, Controller.edit);
router.put("/listadoProducto/:idUser/edicionProducto/:idProd", fileupload.single("imagenProducto") , Controller.editProcess);

//search
router.get("/search", Controller.search);


module.exports = router;