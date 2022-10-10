"use strict";
const StudentDefinition = require("../../table-definitions").StudentDefinition;

module.exports = (sequelize, DataTypes) => {
  const entity = sequelize.define(
    "Student",
    StudentDefinition.build(DataTypes),
    StudentDefinition.constraints
  );
  entity.associate = function (models) {
    entity.hasMany(models.Enrollment, {
      foreignKey: "Enrollments",
      onDelete: "NO ACTION",
    });
  };
  return entity;
};
