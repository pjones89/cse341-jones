const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Dallin Jones');
});

module.exports = routes;