const { EnrollmentController } = require('../controllers');

const router = require('express').Router();

router.post(
  '/',
  EnrollmentController.create
);

router.put(
  '/:id',
  EnrollmentController.update
);

router.get(
  '/',
  EnrollmentController.findAll
);

router.get(
  '/:id',
  EnrollmentController.findById
);

router.delete(
  '/:id',
  EnrollmentController.archive
);

module.exports = router;
