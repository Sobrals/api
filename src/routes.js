const { Router } = require('express');

const routes = new Router();

routes.get('/', (_, response) => { return response.json({msg: 'Hello world'})})

module.exports = routes;