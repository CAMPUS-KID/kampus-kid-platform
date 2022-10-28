const { StudentController } = require('../controllers');

const router = require('express').Router();

router.post(
  '/',
  StudentController.create
);

router.put(
  '/:id',
  StudentController.update
);

router.get(
  '/',
  StudentController.findAll
);

router.get(
  '/:id',
  StudentController.findById
);

router.delete(
  '/:id',
  StudentController.archive
);

module.exports = router;
