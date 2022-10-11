const { StudentController } = require('../controllers');

const router = require('express').Router();

router.post(
  '/',
  StudentController.register
);

module.exports = router;
