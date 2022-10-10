const { AuthValidatorAssistant } = require("../../authentication/assistants");

module.exports.checkRequiredParams = (dataValues) => {
  AuthValidatorAssistant.checkAccountRequiredParams(dataValues);
  AuthValidatorAssistant.checkRequiredParams(dataValues, [
    "companyKey",
    "name",
    "phone",
    "companyName",
    "location",
    "category",
  ]);
};

module.exports.checkCompanyKeyRequiredParams = (dataValues) => {
  AuthValidatorAssistant.checkRequiredParams(dataValues, ["companyKey"]);
};
module.exports.checkOutstandingCompanyRequiredParams = (dataValues) => {
  AuthValidatorAssistant.checkRequiredParams(dataValues, ["company", "imageUrl"]);
};