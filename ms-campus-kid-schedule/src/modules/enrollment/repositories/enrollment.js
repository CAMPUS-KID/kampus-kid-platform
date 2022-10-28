const {
  Enrollment,
  sequelize,
} = require('../../../models');

module.exports.create = async (entityData) => {
  const created = await Enrollment.create(entityData);
  return created.dataValues;
};

module.exports.findById = async function (id) {
  return await Enrollment.findOne({
    where: { id },
  });
};

module.exports.findAll = async function () {
  return await Enrollment.findAll({ where: { isActive: true } });
};

module.exports.update = async function (id, entityData) {
  return await Enrollment.update(entityData, { where: { id, }, });
};

module.exports.setActive = async (id, isActive = true) => {
  const entityData = { isActive };
  return await Enrollment.update(entityData, { where: { id } });
};