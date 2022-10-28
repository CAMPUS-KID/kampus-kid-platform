const {
  Schedule,
  sequelize,
} = require('../../../models');

module.exports.create = async (entityData) => {
  const created = await Schedule.create(entityData);
  return created.dataValues;
};

module.exports.findById = async function (id) {
  return await Schedule.findOne({
    where: { id },
  });
};

module.exports.findAll = async function () {
  return await Schedule.findAll({ where: { isActive: true } });
};

module.exports.update = async function (id, entityData) {
  return await Schedule.update(entityData, { where: { id, }, });
};

module.exports.setActive = async (id, isActive = true) => {
  const entityData = { isActive };
  return await Schedule.update(entityData, { where: { id } });
};