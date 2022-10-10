'use strict';
const StudentDefinition = require('../table-definitions')
  .StudentDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Students',
      StudentDefinition.build(Sequelize),
      StudentDefinition.constraints
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  },
};
