'use strict';

module.exports.build = (DataTypes) => {
  return {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
    subject: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  };
};

module.exports.constraints = {};
