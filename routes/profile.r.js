const express = require('express');
const router = express.Router();
const profileC = require('../controllers/profile.c.js')

router.get('/', profileC.profileGet)

router.post('/', profileC.profilePost )

module.exports = router;