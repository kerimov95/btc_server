const rpc = require('../rpc/index');

exports.balance = async (req, res) => {
    const balance = await rpc.balance();
    res.status(balance.status).json(balance.data);
}

exports.send = async (req, res) => {
    const { address, amount } = req.body;
    const result = await rpc.send(address, amount);
    setTimeout(() => {
        rpc.generate()
    }, 10000);
    res.status(result.status).json(result.data);
}
