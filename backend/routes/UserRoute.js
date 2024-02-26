const express = require('express');
const router = express.Router();

const {
  getAllUser,
  createUser,
  getUserByEmail,
} = require('../controllers/UserController');

router.get('/', getAllUser);
router.get('/:email', getUserByEmail);
router.post('/', createUser);

module.exports = router;
