const express = require('express');
const router = express.Router();
const Controller = require ('../controller/userApiController')

router.get('/', Controller.list);


module.exports = router