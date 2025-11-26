require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');


const app = express();
app.use(cors());
app.use(express.json());


// connect DB
connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce');


// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));