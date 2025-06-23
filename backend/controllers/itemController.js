const Item = require('../models/Item.js');
const slugify = require('slugify');

// Criar um novo item
const createItem = async (req, res) => {
  try {
    const { name, description, category, image } = req.body;

    // Gera slug único
    const slug = slugify(name, { lower: true, strict: true });

    // Verifica se item com o mesmo slug já existe
    const existing = await Item.findOne({ slug });
    if (existing) {
      return res.status(400).json({ error: 'Este item já existe.' });
    }

    const item = new Item({
      name,
      description,
      category,
      image,
      slug,
      createdBy: req.user._id, // Assume que o middleware de auth adiciona `req.user`
    });

    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.error('Erro ao criar item:', error);
    res.status(500).json({ error: 'Erro ao criar item.' });
  }
};

// Listar todos os itens
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar itens.' });
  }
};

// Obter um item por ID ou slug
const getItem = async (req, res) => {
  try {
    const { idOrSlug } = req.params;

    const item = await Item.findOne({
      $or: [{ _id: idOrSlug }, { slug: idOrSlug }],
    });

    if (!item) {
      return res.status(404).json({ error: 'Item não encontrado.' });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar item.' });
  }
};

// Atualizar um item
const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category, image } = req.body;

    const slug = name
      ? slugify(name, { lower: true, strict: true })
      : undefined;

    const updatedItem = await Item.findByIdAndUpdate(
      id,
      {
        ...(name && { name }),
        ...(slug && { slug }),
        ...(description && { description }),
        ...(category && { category }),
        ...(image && { image }),
      },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: 'Item não encontrado.' });
    }

    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar item.' });
  }
};

// Deletar um item
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Item.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Item não encontrado.' });
    }

    res.json({ message: 'Item deletado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar item.' });
  }
};

// Exportar os métodos
module.exports = {
  createItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
};
