module.exports = {
  secret: 'mypreciuossecret',
  corsOptions: {
    origin: '0.0.0.0/0',
    optionsSuccessStatus: 200
  },
  timeToExpireSessionInHours: '10h',
  timeToExpireSessionLinkInHours: '1h',
  timeToExpireRegisterSessionInHours: '48h',
};
