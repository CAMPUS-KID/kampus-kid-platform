'use strict';
const GroupDefinition = require('../table-definitions')
  .GroupDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Groups',
      GroupDefinition.build(Sequelize),
      GroupDefinition.constraints
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Groups');
  },
};
