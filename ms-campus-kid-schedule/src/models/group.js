"use strict";
const GroupDefinition = require("../../table-definitions").GroupDefinition;

module.exports = (sequelize, DataTypes) => {
  const entity = sequelize.define(
    "Group",
    GroupDefinition.build(DataTypes),
    GroupDefinition.constraints
  );
  entity.associate = function (models) {
    entity.belongsTo(models.Schedule, {
      foreignKey: "schedule",
      onDelete: "NO ACTION",
    });
    entity.belongsTo(models.Period, {
      foreignKey: "period",
      onDelete: "NO ACTION",
    });
    entity.belongsTo(models.Teacher, {
      foreignKey: "teacher",
      onDelete: "NO ACTION",
    });
    entity.hasMany(models.Enrollment, {
      foreignKey: "Enrollments",
      onDelete: "NO ACTION",
    });
  };
  return entity;
};
