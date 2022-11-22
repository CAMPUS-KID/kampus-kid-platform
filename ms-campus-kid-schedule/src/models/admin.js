"use strict";
const AdminDefinition = require("../../table-definitions").AdminDefinition;

module.exports = (sequelize, DataTypes) => {
  const entity = sequelize.define(
    "Admin",
    AdminDefinition.build(DataTypes),
    AdminDefinition.constraints
  );
  return entity;
};
