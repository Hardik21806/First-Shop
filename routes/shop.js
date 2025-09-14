const path = require('path');

const express = require('express');

const Productscontroller = require('../controllers/products.js')

const router = express.Router();

router.get('/', Productscontroller.getProducts )

module.exports = router;
