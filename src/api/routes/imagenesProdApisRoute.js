const express = require('express');
const router = express.Router();
const Controller = require ('../controller/imagenesProdApisController')

router.get('/', Controller.list);


module.exports = router