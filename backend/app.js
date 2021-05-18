const express = require('express');
const productRoute = require('./routes/productRoutes.js');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


connectDB();

app.use([bodyParser.urlencoded({extended: true,}), express.json()])
app.use(cors());

app.use('/products', productRoute);

app.listen(port, () => console.log('Its Working'));

module.exports = app;