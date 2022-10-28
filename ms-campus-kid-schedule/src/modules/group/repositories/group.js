const {
  Group,
  sequelize,
} = require('../../../models');

module.exports.create = async (entityData) => {
  const created = await Group.create(entityData);
  return created.dataValues;
};

module.exports.findById = async function (id) {
  return await Group.findOne({
    where: { id },
  });
};

module.exports.findAll = async function () {
  return await Group.findAll({ where: { isActive: true } });
};

module.exports.update = async function (id, entityData) {
  return await Group.update(entityData, { where: { id, }, });
};

module.exports.setActive = async (id, isActive = true) => {
  const entityData = { isActive };
  return await Group.update(entityData, { where: { id } });
};