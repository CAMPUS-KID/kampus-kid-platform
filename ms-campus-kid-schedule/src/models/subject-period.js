"use strict";
const SubjectPeriodDefinition = require("../../table-definitions").SubjectPeriodDefinition;

module.exports = (sequelize, DataTypes) => {
  const entity = sequelize.define(
    "SubjectPeriod",
    SubjectPeriodDefinition.build(DataTypes),
    SubjectPeriodDefinition.constraints
  );
  entity.associate = function (models) {
    entity.belongsTo(models.Period, {
      foreignKey: "period",
      onDelete: "NO ACTION",
    });
  };
  return entity;
};
