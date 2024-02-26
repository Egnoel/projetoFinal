const User = require('../models/User');

// Get all users
const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  const userEmail = req.params.email;
  try {
    const users = await User.findOne({ email: userEmail });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    image: req.body.image,
  });

  try {
    const userRef = await User.findOneAndUpdate(user, user, {
      upsert: true,
      new: true,
      runValidators: true,
    });
    const newUser = await userRef.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllUser, createUser, getUserByEmail };
