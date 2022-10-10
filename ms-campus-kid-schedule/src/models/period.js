"use strict";
const PeriodDefinition = require("../../table-definitions").PeriodDefinition;

module.exports = (sequelize, DataTypes) => {
  const entity = sequelize.define(
    "Period",
    PeriodDefinition.build(DataTypes),
    PeriodDefinition.constraints
  );
  entity.associate = function (models) {
    entity.hasMany(models.SubjectPeriod, {
      foreignKey: "SubjectPeriods",
      onDelete: "NO ACTION",
    });
  };
  return entity;
};
