'use strict';
const EnrollmentDefinition = require('../table-definitions')
  .EnrollmentDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Enrollments',
      EnrollmentDefinition.build(Sequelize),
      EnrollmentDefinition.constraints
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Enrollments');
  },
};
