const Establishment = require('../models/Establishments');
const Address = require('../models/Address');
const User = require('../models/User');

const addEstablishment = async (req, res) => {
  try {
    let store = '';
    const createdBy = req.user._id;
    const { name, address } = req.body;
    const { address: addressStr, coordinates } = address;
    const newAddress = new Address({ address: addressStr, coordinates });
    const savedAddress = await newAddress.save();
    const user = await User.findById(createdBy);
    if (!user) return res.status(404).send({ message: 'User not found' });
    store = user.userType === 'user' ? 'informal' : 'formal';
    const newEstablishment = new Establishment({
      name,
      address: savedAddress._id,
      storeType: store,
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
    const { name, addresId, storeType } = req.body;
    const createdBy = req.user._id;
    const address = await Address.findById(addresId);
    if (!address) return res.status(404).send({ message: 'Address not found' });
    const user = await User.findById(createdBy);
    if (!user) return res.status(404).send({ message: 'User not found' });
    const establishment = await Establishment.findByIdAndUpdate(req.params.id, {
      name,
      address,
      storeType,
      createdBy,
    });
    if (!establishment)
      return res.status(404).send({ message: 'Establishment not found' });
    res.status(200).send(establishment);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const deleteEstablishment = async (req, res) => {
  try {
    const establishment = await Establishment.findByIdAndDelete(req.params.id);
    if (!establishment)
      return res.status(404).send({ message: 'Establishment not found' });
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
    const establishments = await Establishment.find();
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
