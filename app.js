var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companyRouter = require('./routes/company');
var staffRouter = require('./routes/staff');
var shopRouter = require('./routes/shop');

var app = express();
mongoose.connect('mongodb+srv://kongdog444:kongcat444@2013110180-kritsakorn.wofgcw1.mongodb.net/restfulapi?retryWrites=true&w=majority' , 
    {useNewUrlParser: true, useUnifiedTopology: true})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company', companyRouter);
app.use('/staff', staffRouter);
app.use('/shop', shopRouter);

module.exports = app;
