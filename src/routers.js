const express = require('express');
const blogController = require('./controllers')

const route = express.Router();

route.get('/blogs', blogController.getAllBolgs);
route.get('/blogs/:blogId', blogController.getSingleBolg);

module.exports = route;