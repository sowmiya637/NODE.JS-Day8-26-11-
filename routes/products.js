const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');


// Public
router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);


// Protected (admin assumed)
router.post('/', auth, productController.createProduct);
router.put('/:id', auth, productController.updateProduct);
router.delete('/:id', auth, productController.deleteProduct);


module.exports = router;