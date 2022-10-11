'use strict';
const TeacherDefinition = require('../table-definitions')
  .TeacherDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Teachers',
      TeacherDefinition.build(Sequelize),
      TeacherDefinition.constraints
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Teachers');
  },
};
