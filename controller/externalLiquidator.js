

exports.MerchantSettleOrder = async (req, res) => {

    const { amount, client_order_id, pair } = req.body;

    res.json({
        statusCode: 201,
        data: {
            status: true,
            amount,
            request: { pair },
            order_id: client_order_id
        }
    })
}

exports.GetQuickBuyPrice = async (req, res) => {
    res.json({
        statusCode: 200,
        data: {
            BTCEUR: {
                ask: {
                    price: 60000
                }
            }
        }
    })
}
