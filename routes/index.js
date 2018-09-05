const express = require('express');
const router = express.Router();
const napController = require('../controllers/napController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', napController.landingPage);

module.exports = router;
