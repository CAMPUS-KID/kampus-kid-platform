'use strict';
const GradeDefinition = require('../table-definitions')
  .GradeDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Grades',
      GradeDefinition.build(Sequelize),
      GradeDefinition.constraints
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Grades');
  },
};
