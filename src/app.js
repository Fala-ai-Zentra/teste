const express = require('express');
const cors = require('cors');
require('dotenv').config();
const fortuneRabbitRoutes = require('./routes/fortuneRabbitRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/fortune-rabbit', fortuneRabbitRoutes);

module.exports = app;
