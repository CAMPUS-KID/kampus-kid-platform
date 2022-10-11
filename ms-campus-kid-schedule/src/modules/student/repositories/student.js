const {
  Student,
  sequelize,
} = require('../../../models');

module.exports.create = async (entityData) => {
  const transaction = await sequelize.transaction();
  try {
    const valuesToInsert = {
      name: entityData.name,
      email: entityData.email,
      faculty: entityData.faculty,
      career: entityData.career,
    };
    const createdStudent = await Student.create(valuesToInsert, {
      transaction,
    });

    await transaction.commit();

    return createdStudent.dataValues;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};