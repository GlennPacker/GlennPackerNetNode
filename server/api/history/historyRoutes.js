const router = require('express').Router();
const controller = require('./historyController');

router.route('/')
    .get(controller.get)


module.exports = router;
