const express = require('express');
const router = express.Router();
const napController = require('../controllers/napController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', napController.newNap);

router.post('/api/new-nap', napController.newNapPOST);

module.exports = router;
