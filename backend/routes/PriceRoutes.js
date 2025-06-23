const express = require('express');
const router = express.Router();
const {
  createPrice,
  getPricesByItem,
  getLowestPriceByItem,
  getClosestPriceByItem,
  groupPricesByAddress,
  getPriceHistory,
  getCheapestNearby,
} = require('../controllers/priceController.js');
const auth = require('../utils/middleware.js');

router.post('/', auth, createPrice);
router.get('/:idOrSlug', auth, getPricesByItem);
router.get('/:idOrSlug/lowest', auth, getLowestPriceByItem);
router.get('/:idOrSlug/closest', auth, getClosestPriceByItem);
router.get('/:idOrSlug/group', auth, groupPricesByAddress);
router.get('/:idOrSlug/history', auth, getPriceHistory);
router.get('/:idOrSlug/cheapest-nearby', auth, getCheapestNearby);

module.exports = router;
