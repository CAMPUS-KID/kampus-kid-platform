'use strict';
const TeacherDefinition = require('../table-definitions')
  .TeacherDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Tecahers',
      TeacherDefinition.build(Sequelize),
      TeacherDefinition.constraints
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tecahers');
  },
};
