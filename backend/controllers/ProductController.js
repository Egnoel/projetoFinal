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
    const product = await Product.findById(id).populate('Establishment');
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
    // Normaliza o termo de busca
    let { searchTerm } = req.params;
    searchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
    searchTerm = searchTerm.normalize().trim();
    console.log(searchTerm);

    // Busca produtos com nomes normalizados que correspondem ao termo de busca
    const products = await Product.find({
      name: searchTerm,
    })
      .populate('Establishment')
      .populate('createdBy');

    if (!products || products.length === 0) {
      return res.status(404).send({ message: 'No products found' });
    }

    // Salva o histórico de busca
    const searchHistory = new SearchHistory({
      searchTerm: searchTerm,
      user: req.user._id,
    });
    await searchHistory.save();

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
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

const compareProductPrices = async (req, res) => {
  try {
    let { productName } = req.params;
    productName =
      productName.charAt(0).toUpperCase() +
      productName.slice(1).normalize().trim();

    const products = await Product.find({ name: productName }).populate(
      'Establishment'
    );

    if (products.length === 0) {
      return res
        .status(404)
        .send({ message: 'No products found with the specified name' });
    }

    const sortedProducts = products.sort((a, b) => a.price - b.price);

    const priceComparisons = sortedProducts.map((product) => ({
      _id: product._id,
      name: product.name,
      price: product.price,
      images: product.images,
      establishment: {
        name: product.Establishment.name,
        address: product.Establishment.address,
      },
    }));

    res.status(200).send(priceComparisons);
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
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
  compareProductPrices,
};
