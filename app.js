// INITIALIZE ENV. VARIABLES
require('dotenv').config();

// CONSTANTS
const PORT = process.env.PORT || 8000;

// REQUIRES
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// APP DECLARATION
const app = express();

// VIEW CONFIGURATION
app.set('view engine', 'ejs');

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
  res.render('index');
});

app.use('/images', require('./routes/images'));

// SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});
