const { PeriodController } = require('../controllers');

const router = require('express').Router();

router.post(
  '/',
  PeriodController.create
);

router.put(
  '/:id',
  PeriodController.update
);

router.get(
  '/',
  PeriodController.findAll
);

router.get(
  '/:id',
  PeriodController.findById
);

router.delete(
  '/:id',
  PeriodController.archive
);

module.exports = router;
