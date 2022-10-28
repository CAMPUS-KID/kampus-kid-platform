const { SubjectPeriodController } = require('../controllers');

const router = require('express').Router();

router.post(
  '/',
  SubjectPeriodController.create
);

router.put(
  '/:id',
  SubjectPeriodController.update
);

router.get(
  '/',
  SubjectPeriodController.findAll
);

router.get(
  '/:id',
  SubjectPeriodController.findById
);

router.delete(
  '/:id',
  SubjectPeriodController.archive
);

module.exports = router;
