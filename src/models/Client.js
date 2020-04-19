const Sequelize = require('sequelize');
const Model = Sequelize.Model


class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        description: Sequelize.STRING,
        birthday: Sequelize.DATE,
        cpf: Sequelize.STRING
      },
      {
        sequelize,
      }
    );


    return this;
  }

  static associate(models) {
    this.belongsTo(models.Broker, { foreignKey: 'id', as: 'broker_id' });
  }


}

module.exports = Client;
