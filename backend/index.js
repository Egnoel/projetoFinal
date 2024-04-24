const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

// import routes

const UserRoute = require('./routes/UserRoute');
const EstablishmentRoute = require('./routes/EstablishmentRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
const AddressRoutes = require('./routes/AddressRoutes');

// Connect to MongoDB
mongoose
  .connect(`${process.env.BD}/prices`)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define routes and middleware here
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use('/users', UserRoute);
app.use('/establishments', EstablishmentRoute);
app.use('/products', ProductRoutes);
app.use('/addresses', AddressRoutes);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
