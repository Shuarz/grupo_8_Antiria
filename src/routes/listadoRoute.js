const express = require('express');
const router = express.Router();

const listadoController = require('../controller/listadoController.js');

router.get("/listadoProducto/:id", listadoController.listado);

module.exports = router;