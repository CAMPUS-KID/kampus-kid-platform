"use strict";
const ScheduleDefinition = require("../../table-definitions").ScheduleDefinition;

module.exports = (sequelize, DataTypes) => {
  const entity = sequelize.define(
    "Schedule",
    ScheduleDefinition.build(DataTypes),
    ScheduleDefinition.constraints
  );
  entity.associate = function (models) {
    entity.hasMany(models.Group, {
      foreignKey: "Groups",
      onDelete: "NO ACTION",
    });
  };
  return entity;
};
