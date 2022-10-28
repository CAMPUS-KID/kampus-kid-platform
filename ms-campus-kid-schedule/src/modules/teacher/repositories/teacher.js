const {
  Teacher,
  sequelize,
} = require('../../../models');

module.exports.create = async (entityData) => {
  const created = await Teacher.create(entityData);
  return created.dataValues;
};

module.exports.findById = async function (id) {
  return await Teacher.findOne({
    where: { id },
  });
};

module.exports.findAll = async function () {
  return await Teacher.findAll({ where: { isActive: true } });
};

module.exports.update = async function (id, entityData) {
  return await Teacher.update(entityData, { where: { id, }, });
};

module.exports.setActive = async (id, isActive = true) => {
  const entityData = { isActive };
  return await Teacher.update(entityData, { where: { id } });
};