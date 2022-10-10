module.exports.checkPage = (dataValues) => {
  if (dataValues < 1) {
    throw new Error(`The page must be greater than 0`);
  }
  if (!Number.isInteger(dataValues)) {
    throw new Error(`The page must be an interger`);
  }
};
module.exports.checkId = (dataValues) => {
  if (dataValues < 1) {
    throw new Error(`The Id must be greater than 0`);
  }
  if (!Number.isInteger(Number(dataValues))) {
    throw new Error(`The Id must be an interger`);
  }
};
