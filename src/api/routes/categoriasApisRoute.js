const express = require('express');
const router = express.Router();
const Controller = require ('../controller/categoriasApisController')

router.get('/', Controller.list);


module.exports = router