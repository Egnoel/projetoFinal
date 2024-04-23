const Product = require('../models/Product');
const Establishments = require('../models/Establishments');
const Address = require('../models/Address');
const SearchHistory = require('../models/SearchHistory');

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      images,
      establishmentId,
      category,
      createdBy,
    } = req.body;
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = {};
