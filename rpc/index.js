const axios = require('axios');
const { spawn } = require('child_process');
const path = require('path');

const user = process.env.rpc_user;
const password = process.env.rpc_password;
const ip = process.env.rpc_ip;
const port = process.env.rpc_port;
const wallet = process.env.rpc_wallet;

const url = `http://${user}:${password}@${ip}:${port}/wallet/${wallet}`

exports.balance = async () => {
    try {
        const body = { "jsonrpc": "1.0", "id": "curltest", "method": "getbalance", "params": ["*", 6] }
        const responce = await axios.post(url, body);
        return {
            status: responce.status,
            data: responce.data
        };
    }
    catch (error) {
        const { status, data } = error.response;
        return {
            status,
            data
        };
    }
}

exports.send = async (address, amount) => {
    try {
        const body = { "jsonrpc": "1.0", "id": "curltest", "method": "send", "params": [{ [address]: amount }, 6, "economical"] }
        const responce = await axios.post(url, body);
        return {
            status: responce.status,
            data: responce.data
        };
    }
    catch (error) {
        const { status, data } = error.response;
        return {
            status,
            data
        };
    }
}

exports.generate = async () => {
    const bash = spawn('bash', [`${path.join(__dirname, 'scripts')}/btc_mining.sh`]);

    bash.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    bash.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    bash.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}
