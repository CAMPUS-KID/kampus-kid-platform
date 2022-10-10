const RootController = require('../controllers').RootController;

var router = require('express').Router();

router.get('/', RootController.root);

module.exports = router;
