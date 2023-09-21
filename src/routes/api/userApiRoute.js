const express = require('express');
const router = express.Router();

//controller
const userApiController = require ('../../controller/api/userApiController')

//route
router.get('/', userApiController.list);


module.exports = router