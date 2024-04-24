const express = require('express');
const router = express.Router();

const {
  addEstablishment,
  editEstablishment,
  deleteEstablishment,
  getEstablishment,
  getEstablishments,
  getProducts,
  getEstablishmentByType,
} = require('../controllers/EstablishmentController');
const auth = require('../utils/middleware');

router.post('/', auth, addEstablishment);

router.put('/:id', auth, editEstablishment);

router.delete('/:id', auth, deleteEstablishment);

router.get('/:id', getEstablishment);

router.get('/', getEstablishments);

router.get('/:id/products', getProducts);

router.get('/type/:type', getEstablishmentByType);

module.exports = router;
