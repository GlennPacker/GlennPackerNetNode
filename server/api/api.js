var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/history', require('./history/historyRoutes'));

module.exports = router;
