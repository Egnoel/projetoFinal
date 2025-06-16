const Establishment = require('../models/Establishments');
const Address = require('../models/Address');
const User = require('../models/User');

const addEstablishment = async (req, res) => {
  try {
    const { name, Coordinates, addressDetails } = req.body;
    const createdBy = req.user._id;

    // Check if an establishment with the same name already exists
    const existingEstablishment = await Establishment.findOne({ name });
    if (existingEstablishment) {
      return res
        .status(400)
        .send({ message: 'Establishment with this name already exists' });
    }

    const user = await User.findById(createdBy);
    if (!user) return res.status(404).send({ message: 'User not found' });

    const newEstablishment = new Establishment({
      name,
      Coordinates,
      addressDetails,
      createdBy,
    });
    const savedEstablishment = await newEstablishment.save();
    res.status(201).send(savedEstablishment);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const editEstablishment = async (req, res) => {
  try {
    const { name, addressDetails, Coordinates } = req.body;
    const createdBy = req.user._id;

    // Check if the establishment exists before updating
    const establishment = await Establishment.findById(req.params.id);
    if (!establishment) {
      return res.status(404).send({ message: 'Establishment not found' });
    }

    const user = await User.findById(createdBy);
    if (!user) return res.status(404).send({ message: 'User not found' });

    establishment.name = name;
    establishment.addressDetails = addressDetails;
    establishment.Coordinates = Coordinates;
    establishment.createdBy = createdBy;
    const updatedEstablishment = await establishment.save();
    res.status(200).send(updatedEstablishment);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const deleteEstablishment = async (req, res) => {
  try {
    // Check if the establishment has any associated products
    const products = await Product.find({ Establishment: req.params.id });
    if (products.length > 0) {
      return res
        .status(400)
        .send({
          message: 'Cannot delete establishment with associated products',
        });
    }

    const establishment = await Establishment.findByIdAndDelete(req.params.id);
    if (!establishment) {
      return res.status(404).send({ message: 'Establishment not found' });
    }
    res.status(200).send({ message: 'Establishment deleted' });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getEstablishment = async (req, res) => {
  try {
    const establishment = await Establishment.findById(req.params.id);
    if (!establishment)
      return res.status(404).send({ message: 'Establishment not found' });
    res.status(200).send(establishment);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getEstablishments = async (req, res) => {
  try {
    const establishments = await Establishment.find().populate('address');
    res.status(200).send(establishments);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const establishment = await Establishment.findById(req.params.id);
    if (!establishment)
      return res.status(404).send({ message: 'Establishment not found' });
    res.status(200).send(establishment.products);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getEstablishmentByType = async (req, res) => {
  try {
    const establishments = await Establishment.find({
      storeType: req.params.type,
    });
    res.status(200).send(establishments);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = {
  addEstablishment,
  editEstablishment,
  deleteEstablishment,
  getEstablishment,
  getEstablishments,
  getProducts,
  getEstablishmentByType,
};
// Path: routes/establishment.js
