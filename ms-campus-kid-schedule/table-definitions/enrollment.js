'use strict';

module.exports.build = (DataTypes) => {
  return {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    group: {
      allowNull: false,
      references: {
        model: 'Groups',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    student: {
      references: {
        model: 'Students',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
  };
};

module.exports.constraints = {};
