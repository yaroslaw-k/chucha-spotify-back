import express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apiRoutes = require('./routes/api-routes');


export const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'static/')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'static/index.html'));
});


app.use('/api', apiRoutes);

module.exports = app;
