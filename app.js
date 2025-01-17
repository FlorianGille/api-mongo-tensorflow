const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const tensorflowRoutes = require('./routes/tensorflow');

mongoose.connect(
  'mongodb+srv://PaulGodard:PaulGodard@cluster0.4ymyw.gcp.mongodb.net/Mongo-training',
  {useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//set headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// parse the body for post request
app.use(bodyParser.json());

//routes
app.use('/api/tensorflow', tensorflowRoutes);

module.exports = app;