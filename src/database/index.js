const Sequelize = require('sequelize');
const databaseConfig =require('../config/database');

const Broker = require('../models/Broker')


const models = [Broker];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
