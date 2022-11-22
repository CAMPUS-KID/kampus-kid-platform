'use strict';
const AdminDefinition = require('../table-definitions')
  .AdminDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Admins',
      AdminDefinition.build(Sequelize),
      AdminDefinition.constraints
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Admins');
  },
};
