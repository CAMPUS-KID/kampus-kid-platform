"use strict";
const GradeDefinition = require("../../table-definitions").GradeDefinition;

module.exports = (sequelize, DataTypes) => {
  const entity = sequelize.define(
    "Grade",
    GradeDefinition.build(DataTypes),
    GradeDefinition.constraints
  );
  entity.associate = function (models) {
    entity.belongsTo(models.Enrollment, {
      foreignKey: "enrollment",
      onDelete: "NO ACTION",
    });
  };
  return entity;
};
