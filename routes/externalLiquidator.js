const express = require('express');
const externalLiquidator = require('../controller/externalLiquidator');
const router = express.Router();

router.post('/quick-buy/place-order', externalLiquidator.MerchantSettleOrder);
router.post('/spot-trade/get-price', externalLiquidator.GetQuickBuyPrice);

module.exports = router;
