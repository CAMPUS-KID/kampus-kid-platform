module.exports = {
  secret: 'mypreciuossecret',
  corsOptions: {
    origin: 'front-url',
    optionsSuccessStatus: 200
  },
  timeToExpireSessionInHours: '10h',
  timeToExpireSessionLinkInHours: '1h',
  timeToExpireRegisterSessionInHours: '48h',
};
