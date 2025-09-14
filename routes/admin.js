const path = require('path');

const express = require('express');

const Productcontroller = require('../controllers/products');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', Productcontroller.getAddproducts);

// /admin/add-product => POST
router.post('/add-product', Productcontroller.postAddproducts);

module.exports = router;
