const express = require('express');
const router = express.Router();
const searchController = require('../controller/searchController.js');

router.get("/search", searchController.search);

module.exports = router;