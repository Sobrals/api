module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('clients', 'broker_id', {
      type: Sequelize.INTEGER,
      references: { model: 'brokers', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('clients', 'broker_id');
  },
};
