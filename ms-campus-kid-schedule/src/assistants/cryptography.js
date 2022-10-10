let jwt = require('jsonwebtoken');
let crypto = require('crypto');
const config = require('../../config/app_config');

module.exports.encryptWithSHA2 = function (textToEncrypt) {
  return crypto.createHash('SHA256').update(textToEncrypt).digest('hex');
};

module.exports.generateRandomString = function (length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
};

module.exports.generateToken = function (data, customTimeToExpire) {
  return jwt.sign(data, config.secret, {
    expiresIn: customTimeToExpire || config.timeToExpireSessionInHours,
  });
};

module.exports.getTokenInformation = function (token) {
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  return jwt.verify(token, config.secret);
};

module.exports.generateUuidv4 = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
module.exports.generateCode = function () {
  return Math.floor(Math.random() * 9000000) + 1000000;
};

module.exports.generateBasicToken = function (user, password) {
  const key = `${user}:${password}`;
  let buff = new Buffer(key);
  let base64data = buff.toString('base64');
  return `Basic ${base64data}`;
};
