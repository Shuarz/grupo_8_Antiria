const express = require('express');
const router = express.Router();
const Controller = require ('../controller/ofertasApisController')

router.get('/', Controller.list);


module.exports = router