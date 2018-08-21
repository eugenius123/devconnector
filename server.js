const express = require('express');
const mongoose = require('mongoose');

const app = express();
//db config
const db = require('./config/keys').mongoURI;

//connect go mongoDB
mongoose.connect(db, { useNewUrlParser: true }).then(() => console.log('mongoDB connected')).catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port ${port}'));