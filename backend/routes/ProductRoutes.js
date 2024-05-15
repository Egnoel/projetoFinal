const express = require('express');
const router = express.Router();

const {
  addProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProducts,
  searchProduct,
  getLast3SearchHistory,
  compareProductPrices,
} = require('../controllers/ProductController');
const auth = require('../utils/middleware');

router.post('/', auth, addProduct);

router.put('/:id', auth, editProduct);

router.delete('/:id', auth, deleteProduct);

router.get('/:id', getProduct);

router.get('/', getProducts);

router.get('/search/:searchTerm', auth, searchProduct);

router.get('/compare/:productName', auth, compareProductPrices);

router.get('/search/last3', auth, getLast3SearchHistory);

module.exports = router;
