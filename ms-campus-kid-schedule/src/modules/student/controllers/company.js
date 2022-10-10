const { CompanyRepository } = require('../repositories');

module.exports.register = async (req, res) => {
  try {
    const created = await CompanyRepository.create(req.body);
    res.status(201).json({
      success: true,
      data: created,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};