'use strict';
const PeiodDefinition = require('../table-definitions')
  .PeiodDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Peiods',
      PeiodDefinition.build(Sequelize),
      PeiodDefinition.constraints
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Peiods');
  },
};
