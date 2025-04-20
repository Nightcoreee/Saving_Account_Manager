const express = require('express');
const router = express.Router();
const loginC = require('../controllers/login.c.js')
// const passport = require('passport');
// const passport = require('../config/passportConfig');

router.get('/', loginC.loginGet)

router.post('/', loginC.loginAuth)

module.exports = router;