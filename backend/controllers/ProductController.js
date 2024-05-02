const Product = require('../models/Product');
const Establishments = require('../models/Establishments');
const Address = require('../models/Address');
const SearchHistory = require('../models/SearchHistory');

const addProduct = async (req, res) => {
  try {
    const { name, description, price, images, establishmentId } = req.body;
    const createdBy = req.user._id;
    const establishment = await Establishments.findById(establishmentId);
    if (!establishment)
      return res.status(404).send({ message: 'Establishment not found' });
    const newProduct = new Product({
      name,
      description,
      price,
      images,
      Establishment: establishment._id,
      createdBy,
    });
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) return res.status(404).send({ message: 'Product not found' });
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate('Establishment')
      .populate('createdBy');
    res.status(200).send(products);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const editProduct = async (req, res) => {
  try {
    const { name, description, price, images, establishmentId, category } =
      req.body;
    const createdBy = req.user.id;
    const establishment = await Establishments.findById(establishmentId);
    if (!establishment)
      return res.status(404).send({ message: 'Establishment not found' });
    const product = await Product.findByIdAndUpdate(req.params.id, {
      name,
      description,
      price,
      images,
      establishment,
      category,
      createdBy,
    });
    if (!product) return res.status(404).send({ message: 'Product not found' });
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send({ message: 'Product not found' });
    res.status(200).send({ message: 'Product deleted' });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const searchProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const product = await Product.findOne({ name });
    if (!product) return res.status(404).send({ message: 'Product not found' });
    const searchHistory = new SearchHistory({
      searchTerm: name,
      user: req.user._id,
    });
    await searchHistory.save();
    res.status(200).send(product);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const getLast3SearchHistory = async (req, res) => {
  try {
    const searchHistory = await SearchHistory.find({
      user: req.user._id,
    })
      .sort({ createdAt: -1 })
      .limit(3);
    res.status(200).send(searchHistory);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = {
  addProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProducts,
  searchProduct,
  getLast3SearchHistory,
};
