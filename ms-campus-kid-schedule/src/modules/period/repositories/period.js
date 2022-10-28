const {
  Period,
  sequelize,
} = require('../../../models');

module.exports.create = async (entityData) => {
  const created = await Period.create(entityData);
  return created.dataValues;
};

module.exports.findById = async function (id) {
  return await Period.findOne({
    where: { id },
  });
};

module.exports.findAll = async function () {
  return await Period.findAll({ where: { isActive: true } });
};

module.exports.update = async function (id, entityData) {
  return await Period.update(entityData, { where: { id, }, });
};

module.exports.setActive = async (id, isActive = true) => {
  const entityData = { isActive };
  return await Period.update(entityData, { where: { id } });
};