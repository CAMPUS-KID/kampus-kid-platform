"use strict";

module.exports.build = (DataTypes) => {
  return {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      validate: {
        notEmpty: true,
      },
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
      type: DataTypes.TEXT,
    }, 
    faculty: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    career: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
