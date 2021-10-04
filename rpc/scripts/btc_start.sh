node1="bitcoin-cli -regtest -rpcport=1234 -rpcuser=username -rpcpassword=password"
node2="bitcoin-cli -regtest -rpcport=9555 -rpcuser=username -rpcpassword=password"

rm -R btc

mkdir -p btc/node1 btc/node2

echo -e "rpcuser=username\nrpcpassword=password" > btc/node1/bitcoin.conf
echo -e "rpcuser=username\nrpcpassword=password\nwalletnotify=curl http://127.0.0.1:4444/api/wallet/wehook/%s" > btc/node2/bitcoin.conf

bitcoind -regtest -port=1111 -datadir=btc/node1 -rpcport=1234 -fallbackfee=0.00001 --daemon
bitcoind -regtest -port=2222 -datadir=btc/node2 -rpcport=9555 -fallbackfee=0.00001 --daemon

sleep 3
$node1 getblockchaininfo
$node2 getblockchaininfo

$node1 addnode "127.0.0.1:2222" "add"

sleep 3
$node1 createwallet "wallet1"
sleep 3
$node1 generatetoaddress 101 $($node1 getnewaddress)

sleep 3
$node2 createwallet "wallet2"
