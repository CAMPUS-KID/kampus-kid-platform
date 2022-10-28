const { PeriodRepository } = require('../repositories');

module.exports.create = async (req, res) => {
  try {
    const created = await PeriodRepository.create(req.body);
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
    const record = await PeriodRepository.findById(req.params.id);
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
    const records = await PeriodRepository.findAll();
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
    await PeriodRepository.update(req.params.id, req.body);
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
    await PeriodRepository.setActive(req.params.id, false);
    res.status(200).json();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};