const express = require('express');
const router = express.Router();

const {
  addEstablishment,
  editEstablishment,
  deleteEstablishment,
  getEstablishment,
  getEstablishments,
} = require('../controllers/EstablishmentController');

router.post('/', addEstablishment);

router.put('/:id', editEstablishment);

router.delete('/:id', deleteEstablishment);

router.get('/:id', getEstablishment);

router.get('/', getEstablishments);

module.exports = router;
