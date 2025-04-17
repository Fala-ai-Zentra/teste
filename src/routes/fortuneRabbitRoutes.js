const express = require('express');
const router = express.Router();
const controller = require('../controllers/fortuneRabbitController');

router.post('/spin', controller.createSpin);
router.get('/spins/:userId', controller.getUserSpins);

module.exports = router;
