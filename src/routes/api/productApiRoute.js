const express = require('express');
const router = express.Router();

//controller
const productApiController = require ('../../controller/api/productApiController')

//route
router.get('/', productApiController.list);


module.exports = router