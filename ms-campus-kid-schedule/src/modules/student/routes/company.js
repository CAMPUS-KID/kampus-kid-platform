const { CompanyController } = require('../controllers');

const router = require('express').Router();

router.post(
  '/',
  CompanyController.register
);
module.exports = router;
