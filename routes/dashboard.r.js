const express = require('express');
const router = express.Router();
const dashboardC = require('../controllers/dashboard.c.js')

router.get('/', dashboardC.dashboardGet)

// router.post('/', loginC.loginAuth)

module.exports = router;