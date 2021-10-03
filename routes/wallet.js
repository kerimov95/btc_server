const express = require('express');
const walletController = require('../controller/wallet');
const router = express.Router();

router.get('/balance', walletController.balance);
router.get('/send', walletController.send);

module.exports = router;
