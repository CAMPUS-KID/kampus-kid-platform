const { TeacherController } = require('../controllers');

const router = require('express').Router();

router.post(
  '/',
  TeacherController.create
);

router.put(
  '/:id',
  TeacherController.update
);

router.get(
  '/',
  TeacherController.findAll
);

router.get(
  '/:id',
  TeacherController.findById
);

router.delete(
  '/:id',
  TeacherController.archive
);

module.exports = router;
