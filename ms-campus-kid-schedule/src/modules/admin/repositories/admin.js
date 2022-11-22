const {
  Admin,
  sequelize,
} = require('../../../models');

module.exports.create = async (entityData) => {
  const created = await Admin.create(entityData);
  return created.dataValues;
};

module.exports.findById = async function (id) {
  return await Admin.findOne({
    where: { id },
  });
};

module.exports.findAll = async function () {
  return await Admin.findAll({ where: { isActive: true } });
};

module.exports.update = async function (id, entityData) {
  return await Admin.update(entityData, { where: { id, }, });
};

module.exports.setActive = async (id, isActive = true) => {
  const entityData = { isActive };
  return await Admin.update(entityData, { where: { id } });
};