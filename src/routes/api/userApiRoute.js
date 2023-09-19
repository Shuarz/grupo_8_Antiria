const express = require('express');
const router = express.Router();

//controller
const userApiController = require ('../../controller/apis/userApiController')

//route
router.get('/', userApiController.list);


module.export = router