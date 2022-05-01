const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routers')
const app = express();

// port
const port = process.env.PORT || 2000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// routes middleware
app.use('/api/v1', routes)


app.listen(port, () => console.log(`server is running on port ${port}`));

module.exports = app;