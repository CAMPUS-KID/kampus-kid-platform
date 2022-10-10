module.exports.root = async (req, res) => {
  res.json({
    success: true,
    env: process.env.NODE_ENV,
  });
};
