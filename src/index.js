// Server settings
require('dotenv').config();

// Requirements
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();
const indexRoutes = require('./routes/routes');

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});


// Database connection
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Conectado con mongo '))
    .catch(err => console.log(err));


// Initialization
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(multer({
    storage,
    dest: path.join(__dirname, 'public/uploads'),

}).any('file'));

// Routes
app.use('/', indexRoutes);


// Server initialization
app.listen(app.get('port'), () => {
    console.log(`Server on por ${app.get('port')}`);
});