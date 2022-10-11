'use strict';
const PeriodDefinition = require('../table-definitions')
  .PeriodDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Periods',
      PeriodDefinition.build(Sequelize),
      PeriodDefinition.constraints
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Periods');
  },
};
