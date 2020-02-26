const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/Items')

const app = express();

app.use(express.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(()=>console.log('MongoDB connected'))
    .catch(err=>console.log(err))

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('server started on port ${port}'));