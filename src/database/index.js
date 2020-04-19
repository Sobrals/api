const Sequelize = require('sequelize');
const databaseConfig =require('../config/database');

const Broker = require('../models/Broker')


const models = [Broker];

class Database {
  constructor() {
    this.init();
  }

  init() {
    console.log('Iniciando database')
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();
