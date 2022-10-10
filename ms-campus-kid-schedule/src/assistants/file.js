const { FileTypeEnum } = require('../enums');
const fs = require('fs');

module.exports.getFileContent = async (type, name, params = []) => {
  let folder, extension;
  switch (type) {
    case FileTypeEnum.EMAIL_TEMPLATE:
      folder = 'email-templates';
      extension = 'html';
      break;
    case FileTypeEnum.SCRIPT:
      folder = 'scripts';
      extension = 'min.js';
      break;
    case FileTypeEnum.TWILIO_TEMPLATE:
      folder = 'twilio-templates';
      extension = 'xml';
      break;
  }
  let fileContent = await new Promise((res, rej) => {
    fs.readFile(
      `src/resources/${folder}/${name}.${extension}`,
      'utf-8',
      function (err, data) {
        if (err) {
          rej(err);
        }
        res(data);
      }
    );
  });
  params.forEach((param, index) => {
    while (fileContent.includes('${' + index + '}')) {
      fileContent = fileContent.replace('${' + index + '}', param);
    }
  });
  return fileContent;
};
