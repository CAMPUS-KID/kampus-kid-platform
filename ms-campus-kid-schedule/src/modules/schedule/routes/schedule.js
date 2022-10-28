const { ScheduleController } = require('../controllers');

const router = require('express').Router();

router.post(
  '/',
  ScheduleController.create
);

router.put(
  '/:id',
  ScheduleController.update
);

router.get(
  '/',
  ScheduleController.findAll
);

router.get(
  '/:id',
  ScheduleController.findById
);

router.delete(
  '/:id',
  ScheduleController.archive
);

module.exports = router;
