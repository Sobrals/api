const Sequelize, { Model } = require('sequelize');

class Broker extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        creci: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async broker => {
      if (broker.password) {
        broker.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

}

module.exports = Broker;
