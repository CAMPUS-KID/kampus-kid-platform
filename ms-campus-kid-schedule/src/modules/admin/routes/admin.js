const { AdminController } = require('../controllers');

const router = require('express').Router();

router.post(
  '/',
  AdminController.create
);

router.put(
  '/:id',
  AdminController.update
);

router.get(
  '/',
  AdminController.findAll
);

router.get(
  '/:id',
  AdminController.findById
);

router.delete(
  '/:id',
  AdminController.archive
);

module.exports = router;
