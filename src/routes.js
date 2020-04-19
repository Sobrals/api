const { Router } = require('express');
const BrokerController = require('./controllers/BrokerController')
const ClientController = require('./controllers/ClientController')


const routes = new Router();

routes.post('/brokers', BrokerController.store);
routes.get('/brokers', BrokerController.index);

routes.post('/clients', ClientController.store)


module.exports = routes;
