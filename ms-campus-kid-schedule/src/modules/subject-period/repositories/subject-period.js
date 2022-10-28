const {
  SubjectPeriod,
  sequelize,
} = require('../../../models');

module.exports.create = async (entityData) => {
  const created = await SubjectPeriod.create(entityData);
  return created.dataValues;
};

module.exports.findById = async function (id) {
  return await SubjectPeriod.findOne({
    where: { id },
  });
};

module.exports.findAll = async function () {
  return await SubjectPeriod.findAll({ where: { isActive: true } });
};

module.exports.update = async function (id, entityData) {
  return await SubjectPeriod.update(entityData, { where: { id, }, });
};

module.exports.setActive = async (id, isActive = true) => {
  const entityData = { isActive };
  return await SubjectPeriod.update(entityData, { where: { id } });
};