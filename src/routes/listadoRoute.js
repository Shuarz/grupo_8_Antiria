const express = require('express');
const router = express.Router();

const listadoController = require('../controller/listadoController.js');

router.get("/listadoProducto/:id", listadoController.listado);


router.post('/eliminar', (req, res) => {
    const id = req.body.id;
    listadoController.eliminar(id);
    res.redirect('/listadoProducto');
  });

module.exports = router;

