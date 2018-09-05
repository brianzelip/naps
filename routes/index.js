const express = require('express');
const router = express.Router();
const _Controller = require('../controllers/_Controller');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', _Controller.landingPage);

module.exports = router;
