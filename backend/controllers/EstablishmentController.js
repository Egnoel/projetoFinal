const Establishment = require('../models/Establishments');
const Address = require('../models/Address');
const User = require('../models/User');

const addEstablishment = async (req, res) => {
  try {
    const { name, addresId, storeType, createdBy } = req.body;
    const address = await Address.findById(addresId);
    if (!address) return res.status(404).send({ message: 'Address not found' });
    const user = await User.findById(createdBy);
    if (!user) return res.status(404).send({ message: 'User not found' });
    const newEstablishment = new Establishment({
      name,
      address,
      storeType,
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
    const { name, addresId, storeType, createdBy } = req.body;
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

module.exports = {
  addEstablishment,
  editEstablishment,
  deleteEstablishment,
  getEstablishment,
  getEstablishments,
};
// Path: routes/establishment.js
