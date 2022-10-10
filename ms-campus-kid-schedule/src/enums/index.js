module.exports.AccountTypeEnum = {
  ADMIN: 1,
  COMPANY: 2,
};

module.exports.CompanyTypeEnum = {
  DIAMOND: 1,
  SILVER: 2,
  GOLD: 3,
};

module.exports.PostTypeEnum = {
  TEXT: 1,
  IMAGE: 2,
  VIDEO: 3,
  LINK: 4,
};

module.exports.TransactionTypeEnum = {
  RECHARGE: 1,
  PLAN_ACQUISITION: 2,
  CONSUME: 3,
  WITHDRAW: 4,
};

module.exports.QuotationStatusEnum = {
  NEW: 1,
  SEND: 2,
  APPROVED: 3,
  REJECTED: 4,
};

module.exports.FileTypeEnum = {
  SCRIPT: 1,
  EMAIL_TEMPLATE: 2,
  TWILIO_TEMPLATE: 3,
};

module.exports.CampaignStatusEnum = {
  NEW: 1,
  STARTED: 2,
  PAUSED: 3,
  STOPPED: 4,
  FINISHED: 5,
};

module.exports.PaymentMethodEnum = {
  PSE: 1,
  CREDIT_CARD: 2,
  DEBIT_CARD: 3,
  CUPON: 4,
  CASH: 5,
  THIRD_PARTY: 6,
  COINS: 7,
};

module.exports.CompanyUserTypeEnum = {
  READ_ONLY: 1,
  OWNER: 2,
};

module.exports.VoiceFormFieldType = {
  THANKS: 1,
  INTRODUCTION: 2,
  QUESTION: 3,
};

module.exports.CurrencyEnum = {
  COP: 1,
  USD: 2,
};

module.exports.TransactionStatusEnum = {
  PENDING: 1,
  ACCEPTED: 2,
  DECLINED: 3,
};
