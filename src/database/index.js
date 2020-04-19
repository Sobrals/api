const Sequelize = require('sequelize');
const databaseConfig =require('../config/database');

const Broker = require('../models/Broker')
const Client = require('../models/Client')



const models = [Broker, Client];

class Database {
  constructor() {
    this.init();
  }

  init() {
    console.log('Iniciando database')
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

module.exports = new Database();
