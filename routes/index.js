const express = require('express');
const router = express.Router();
const napController = require('../controllers/napController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', napController.landingPage);

router.post('/api/add-nap', napController.addNapPOST);

module.exports = router;
