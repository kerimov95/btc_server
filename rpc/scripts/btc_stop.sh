node1="bitcoin-cli -regtest -rpcport=1234 -rpcuser=username -rpcpassword=password"
node2="bitcoin-cli -regtest -rpcport=9555 -rpcuser=username -rpcpassword=password"

$node1 stop
$node2 stop
