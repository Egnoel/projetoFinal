const Address = require('../models/Address');

const addAddress = async (req, res) => {
  try {
    const { address, coordinates } = req.body;
    const newAddress = new Address({ address, coordinates });
    await newAddress.save();
    res.status(201).send(newAddress);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const updateAddress = async (req, res) => {
  try {
    const { address, coordinates } = req.body;
    const addressId = req.params.id;
    const updatedAddress = await Address.findByIdAndUpdate(
      addressId,
      { address, coordinates },
      { new: true }
    );
    res.status(200).send(updatedAddress);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;
    await Address.findByIdAndDelete(id);
    res.status(200).send({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const address = await Address.findById(id);
    if (!address) return res.status(404).send({ message: 'Address not found' });
    res.status(200).send(address);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).send(addresses);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = {
  addAddress,
  updateAddress,
  deleteAddress,
  getAddress,
  getAddresses,
};
