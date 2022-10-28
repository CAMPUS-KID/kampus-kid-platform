const { GroupController } = require('../controllers');

const router = require('express').Router();

router.post(
  '/',
  GroupController.create
);

router.put(
  '/:id',
  GroupController.update
);

router.get(
  '/',
  GroupController.findAll
);

router.get(
  '/:id',
  GroupController.findById
);

router.delete(
  '/:id',
  GroupController.archive
);

module.exports = router;
