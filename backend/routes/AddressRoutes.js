const express = require('express');
const router = express.Router();
const {
  addAddress,
  deleteAddress,
  getAddress,
  getAddresses,
  updateAddress,
} = require('../controllers/AddressController');

router.post('/', addAddress);

router.put('/:id', updateAddress);

router.delete('/:id', deleteAddress);

router.get('/:id', getAddress);

router.get('/', getAddresses);

module.exports = router;
