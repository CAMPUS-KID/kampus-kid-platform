const { FileAssistant, SendEmailAssistant } = require('../../../assistants');
const { FileTypeEnum } = require('../../../enums');

fs = require('fs');

module.exports.sendWelcomeEmail = async (email, name) => {
  const template = await FileAssistant.getFileContent(
    FileTypeEnum.EMAIL_TEMPLATE,
    'welcome',
    [email, name]
  );
  await SendEmailAssistant.sendEmail(
    email,
    '¡Encantados de trabajar contigo en TALK EVA!',
    template
  );
};
module.exports.sendCompanyCommentEmail = async (name, comment) => {
  const template = await FileAssistant.getFileContent(
    FileTypeEnum.EMAIL_TEMPLATE,
    'company-comment',
    [name, comment]
  );
  await SendEmailAssistant.sendEmail(
    SendEmailAssistant.COMPANY_EMAIL,
    'Nueva sugerencia',
    template
  );
};
