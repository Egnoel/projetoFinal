const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: 'Usuário não encontrado' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).send({ message: 'Senha incorreta' });
    }
    const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
      expiresIn: 86400, // expires in 24 hours
    });
    res.status(200).send({ token, user });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const signup = async (req, res) => {
  try {
    const { firstName, lastName, image, userType, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(404).send({ message: 'Usuário já cadastrado' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      image,
      userType,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    const token = jwt.sign({ _id: savedUser._id }, process.env.SECRET, {
      expiresIn: 86400, // expires in 24 hours
    });
    res.status(200).send({ token, user: savedUser });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    req.logout();
    res.status(200).send({ message: 'Usuário deslogado' });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = { login, signup, logout };
