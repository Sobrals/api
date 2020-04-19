const { Router } = require('express');
const BrokerController = require('./controllers/BrokerController')

const routes = new Router();

routes.post('/brokers', BrokerController.store);
routes.get('/brokers', BrokerController.index);


module.exports = routes;
