const express = require('express');
const router = express.Router();

const {
  createEstablishment,
  getAllEstablishments,
  getEstablishmentById,
  updateEstablishment,
  deleteEstablishment,
} = require('../controllers/EstablishmentController.js');
const auth = require('../utils/middleware.js');

router.post('/', auth, createEstablishment);

router.put('/:id', auth, updateEstablishment);

router.delete('/:id', auth, deleteEstablishment);

router.get('/:id', getEstablishmentById);

router.get('/', getAllEstablishments);

module.exports = router;
