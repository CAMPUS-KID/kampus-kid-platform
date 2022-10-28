const { EnrollmentRepository } = require('../repositories');

module.exports.create = async (req, res) => {
  try {
    const created = await EnrollmentRepository.create(req.body);
    res.status(201).json(created);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.findById = async (req, res) => {
  try {
    const record = await EnrollmentRepository.findById(req.params.id);
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.findAll = async (req, res) => {
  try {
    const records = await EnrollmentRepository.findAll();
    res.status(200).json(records);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.update = async (req, res) => {
  try {
    await EnrollmentRepository.update(req.params.id, req.body);
    res.status(200).json();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.archive = async (req, res) => {
  try {
    await EnrollmentRepository.setActive(req.params.id, false);
    res.status(200).json();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};