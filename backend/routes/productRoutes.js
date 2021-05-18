const express = require('express');
const { getProducts, insertProduct, deleteProduct, updateProduct } = require('../controller/productLogic');

const router = express.Router();

router.get('/', getProducts);
router.post('/', insertProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

module.exports = router;