"use strict";
const TeacherDefinition = require("../../table-definitions").TeacherDefinition;

module.exports = (sequelize, DataTypes) => {
  const entity = sequelize.define(
    "Teacher",
    TeacherDefinition.build(DataTypes),
    TeacherDefinition.constraints
  );
  entity.associate = function (models) {
    entity.hasMany(models.Group, {
      foreignKey: "Groups",
      onDelete: "NO ACTION",
    });
  };
  return entity;
};
