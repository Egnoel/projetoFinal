const Item = require('../models/Item.js');
const Price = require('../models/Price.js');
const Establishment = require('../models/Establishment.js');
const slugify = require('slugify');

const createPrice = async (req, res) => {
  try {
    const {
      itemName,
      itemDescription,
      itemCategory,
      itemImage,
      price,
      establishmentName,
      establishmentCoordinates, // [longitude, latitude]
      addressDetails,
      images,
      comment,
    } = req.body;

    const slug = slugify(itemName, { lower: true, strict: true });

    // 1. Verifica ou cria o Item
    let item = await Item.findOne({ slug });
    if (!item) {
      item = await Item.create({
        name: itemName,
        slug,
        description: itemDescription || '',
        category: itemCategory || 'Outro',
        image: itemImage || '',
        createdBy: req.user._id,
      });
    }

    // 2. Verifica ou cria o Estabelecimento
    let establishment = await Establishment.findOne({
      name: establishmentName,
      'Coordinates.coordinates': establishmentCoordinates,
    });

    if (!establishment) {
      establishment = await Establishment.create({
        name: establishmentName,
        addressDetails: addressDetails || '',
        Coordinates: {
          type: 'Point',
          coordinates: establishmentCoordinates,
        },
        createdBy: req.user._id,
      });
    }

    // 3. Cria o registro de preço
    const priceRecord = await Price.create({
      item: item._id,
      price,
      establishment: establishment._id,
      createdBy: req.user._id,
      images: images || [],
      comment: comment || '',
    });

    res.status(201).json(priceRecord);
  } catch (error) {
    console.error('Erro ao criar preço:', error);
    res.status(500).json({ error: 'Erro ao criar o registro de preço.' });
  }
};

// Buscar todos os registros de preço de um item
const getPricesByItem = async (req, res) => {
  try {
    const { idOrSlug } = req.params;

    const item = await Item.findOne({
      $or: [{ _id: idOrSlug }, { slug: idOrSlug }],
    });
    if (!item) {
      return res.status(404).json({ error: 'Item não encontrado.' });
    }

    const prices = await Price.find({ item: item._id })
      .populate('establishment')
      .populate('createdBy', 'firstName lastName');

    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar preços.' });
  }
};

const getLowestPriceByItem = async (req, res) => {
  try {
    const { idOrSlug } = req.params;

    const item = await Item.findOne({
      $or: [{ _id: idOrSlug }, { slug: idOrSlug }],
    });
    if (!item) return res.status(404).json({ error: 'Item não encontrado.' });

    const cheapest = await Price.find({ item: item._id })
      .sort({ price: 1 })
      .limit(1)
      .populate('establishment')
      .populate('createdBy', 'firstName lastName');

    res.json(cheapest[0] || null);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar preço mais barato.' });
  }
};

const getClosestPriceByItem = async (req, res) => {
  try {
    const { idOrSlug } = req.params;
    const { lng, lat } = req.query;

    const item = await Item.findOne({
      $or: [{ _id: idOrSlug }, { slug: idOrSlug }],
    });
    if (!item) return res.status(404).json({ error: 'Item não encontrado.' });

    const prices = await Price.find({ item: item._id })
      .populate({
        path: 'establishment',
        match: {
          Coordinates: {
            $near: {
              $geometry: {
                type: 'Point',
                coordinates: [parseFloat(lng), parseFloat(lat)],
              },
              $maxDistance: 10000, // raio em metros, ex: 10km
            },
          },
        },
      })
      .populate('createdBy', 'firstName lastName');

    const filtered = prices.filter((p) => p.establishment); // remove os que não casam com o $near
    res.json(filtered[0] || null);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar preço mais próximo.' });
  }
};

const groupPricesByAddress = async (req, res) => {
  try {
    const { idOrSlug } = req.params;

    const item = await Item.findOne({
      $or: [{ _id: idOrSlug }, { slug: idOrSlug }],
    });
    if (!item) return res.status(404).json({ error: 'Item não encontrado.' });

    const prices = await Price.find({ item: item._id })
      .populate('establishment')
      .populate('createdBy', 'firstName lastName');

    // Agrupar manualmente por endereço
    const grouped = {};
    for (const p of prices) {
      const key = p.establishment?.addressDetails || 'Local não especificado';
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(p);
    }

    res.json(grouped);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao agrupar preços por local.' });
  }
};

const getPriceHistory = async (req, res) => {
  try {
    const { idOrSlug } = req.params;

    const item = await Item.findOne({
      $or: [{ _id: idOrSlug }, { slug: idOrSlug }],
    });
    if (!item) return res.status(404).json({ error: 'Item não encontrado.' });

    const prices = await Price.find({ item: item._id })
      .sort({ createdAt: 1 })
      .select('price createdAt');

    // Resposta: array de { price, createdAt }
    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar histórico de preços.' });
  }
};

const getCheapestNearby = async (req, res) => {
  try {
    const { idOrSlug } = req.params;
    const { lng, lat, radius } = req.query; // radius em metros

    const item = await Item.findOne({
      $or: [{ _id: idOrSlug }, { slug: idOrSlug }],
    });
    if (!item) return res.status(404).json({ error: 'Item não encontrado.' });

    // Busca todos os estabelecimentos no raio
    const establishments = await Establishment.find({
      Coordinates: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: parseInt(radius) || 10000, // padrão 10km
        },
      },
    });

    const estIds = establishments.map((e) => e._id);

    // Agora busca os preços mais baratos nesses estabelecimentos
    const prices = await Price.find({
      item: item._id,
      establishment: { $in: estIds },
    })
      .sort({ price: 1 })
      .limit(1)
      .populate('establishment')
      .populate('createdBy', 'firstName lastName');

    res.json(prices[0] || null);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Erro ao buscar preço mais barato próximo.' });
  }
};

module.exports = {
  createPrice,
  getPricesByItem,
  getLowestPriceByItem,
  getClosestPriceByItem,
  groupPricesByAddress,
  getPriceHistory,
  getCheapestNearby,
};
