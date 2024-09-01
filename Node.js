const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const router = require('./Routes.js');
const {ipGettingMiddleware} = require('./Middleware.js');
//const {firstMiddleware} = require('./Middleware.js');

mongoose.connect('mongodb+srv://kushpandit68775:kush68775@portfoliodata.wppojw6.mongodb.net/').then(() =>
console.log('server started')).catch(err => console.log('mongoose err', err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './')));

app.use(ipGettingMiddleware);

app.use('/', router);

app.set('view engine' , 'ejs');
app.set('views', path.resolve('./'));

app.listen(PORT , () => console.log('server started http://localhost:5000/'));
