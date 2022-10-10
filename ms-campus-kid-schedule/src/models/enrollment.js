"use strict";
const EnrollmentDefinition = require("../../table-definitions").EnrollmentDefinition;

module.exports = (sequelize, DataTypes) => {
  const entity = sequelize.define(
    "Enrollment",
    EnrollmentDefinition.build(DataTypes),
    EnrollmentDefinition.constraints
  );
  entity.associate = function (models) {
    entity.belongsTo(models.Group, {
      foreignKey: "group",
      onDelete: "NO ACTION",
    });
    entity.belongsTo(models.Student, {
      foreignKey: "student",
      onDelete: "NO ACTION",
    });
  };
  return entity;
};
