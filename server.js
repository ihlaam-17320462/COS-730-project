const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import Routes
const user = require('./routes/user');
const orders = require('./routes/orders');
const driver = require('./routes/driver');

// Run Tasks
require('./tasks/driver');

dotenv.config();

// Connect to Mongo
mongoose
    .connect(process.env.DATABASE_ACCESS,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true})
    .then(()=> console.log('database connected'))
    .catch(err => console.log(err));

app.use(express.json())
app.use(cors())

app.use('/api/user', user)

app.use('/api/orders', orders)
app.use('/api/driver', driver)

const port = process.env.PORT || 4000;

app.listen(port , ()=> console.log(`Server is running on port ${port}`));