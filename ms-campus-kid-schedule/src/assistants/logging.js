module.exports.devLog = (data) => {
  const env = process.env.NODE_ENV || 'development';
  if (env == 'development') {
    console.log(data);
  }
};
