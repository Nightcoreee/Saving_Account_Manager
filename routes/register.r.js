const express = require('express');
const router = express.Router();
const registerC = require('../controllers/register.c.js')

router.get('/', registerC.registerGet)

router.post('/', registerC.registerPost)

module.exports = router;