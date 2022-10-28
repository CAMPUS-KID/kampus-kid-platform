const {
  Student,
  sequelize,
} = require('../../../models');

module.exports.create = async (entityData) => {
  const created = await Student.create(entityData);
  return created.dataValues;
};

module.exports.findById = async function (id) {
  return await Student.findOne({
    where: { id },
  });
};

module.exports.findAll = async function () {
  return await Student.findAll({ where: { isActive: true } });
};

module.exports.update = async function (id, entityData) {
  return await Student.update(entityData, { where: { id, }, });
};

module.exports.setActive = async (id, isActive = true) => {
  const entityData = { isActive };
  return await Student.update(entityData, { where: { id } });
};