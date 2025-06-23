const express = require('express');
const router = express.Router();

const {
  createItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
} = require('../controllers/itemController.js');
const auth = require('../utils/middleware.js');

router.post('/', auth, createItem);

router.put('/:id', auth, updateItem);

router.delete('/:id', auth, deleteItem);

router.get('/:idOrSlug', getItem);

router.get('/', getAllItems);

module.exports = router;
