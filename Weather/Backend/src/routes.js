const express = require('express');

const routes = express.Router();

routes.post('/weather', (req, res) =>
{
    res.send('Weather Page');
});

module.exports = routes;