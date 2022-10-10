'use strict';
const ScheduleDefinition = require('../table-definitions')
  .ScheduleDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Schedules',
      ScheduleDefinition.build(Sequelize),
      ScheduleDefinition.constraints
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Schedules');
  },
};
