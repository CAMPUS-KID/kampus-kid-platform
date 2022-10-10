"use strict";

module.exports.build = (DataTypes) => {
  return {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    weekDay: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    startHour: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    endHour: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    isActive: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
};

module.exports.constraints = {};
