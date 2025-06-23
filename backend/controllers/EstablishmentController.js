const Establishment = require('../models/Establishment.js');

// Criar um novo estabelecimento
const createEstablishment = async (req, res) => {
  try {
    const { name, addressDetails, coordinates } = req.body;

    // Verifica se já existe estabelecimento com o mesmo nome e coordenadas
    const existing = await Establishment.findOne({
      name,
      'Coordinates.coordinates': coordinates,
    });

    if (existing) {
      return res.status(400).json({ error: 'Estabelecimento já existe.' });
    }

    const est = await Establishment.create({
      name,
      addressDetails: addressDetails || '',
      Coordinates: {
        type: 'Point',
        coordinates,
      },
      createdBy: req.user._id,
    });

    res.status(201).json(est);
  } catch (error) {
    console.error('Erro ao criar estabelecimento:', error);
    res.status(500).json({ error: 'Erro ao criar estabelecimento.' });
  }
};

// Listar todos os estabelecimentos
const getAllEstablishments = async (req, res) => {
  try {
    const establishments = await Establishment.find().sort({ createdAt: -1 });
    res.json(establishments);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estabelecimentos.' });
  }
};

// Buscar estabelecimento por ID
const getEstablishmentById = async (req, res) => {
  try {
    const { id } = req.params;

    const est = await Establishment.findById(id);
    if (!est) {
      return res.status(404).json({ error: 'Estabelecimento não encontrado.' });
    }

    res.json(est);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estabelecimento.' });
  }
};

// Atualizar estabelecimento
const updateEstablishment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, addressDetails, coordinates } = req.body;

    const updated = await Establishment.findByIdAndUpdate(
      id,
      {
        ...(name && { name }),
        ...(addressDetails && { addressDetails }),
        ...(coordinates && {
          Coordinates: {
            type: 'Point',
            coordinates,
          },
        }),
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Estabelecimento não encontrado.' });
    }

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar estabelecimento.' });
  }
};

// Deletar estabelecimento
const deleteEstablishment = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Establishment.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Estabelecimento não encontrado.' });
    }

    res.json({ message: 'Estabelecimento deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar estabelecimento.' });
  }
};

module.exports = {
  createEstablishment,
  getAllEstablishments,
  getEstablishmentById,
  updateEstablishment,
  deleteEstablishment,
};
