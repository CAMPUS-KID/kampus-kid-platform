'use strict';

module.exports.build = (DataTypes) => {
  return {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    schedule: {
      allowNull: false,
      references: {
        model: 'Schedules',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    teacher: {
      allowNull: false,
      references: {
        model: 'Teachers',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    period: {
      allowNull: false,
      references: {
        model: 'Periods',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    code: {
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
