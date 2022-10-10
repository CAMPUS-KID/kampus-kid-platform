'use strict';
const SubjectPeriodDefinition = require('../table-definitions')
  .SubjectPeriodDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'SubjectPeriods',
      SubjectPeriodDefinition.build(Sequelize),
      SubjectPeriodDefinition.constraints
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SubjectPeriods');
  },
};
