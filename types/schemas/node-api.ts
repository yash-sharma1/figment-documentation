/**
 * eth_getBlockByHash
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns information about a block by hash.
 *
 * **Parameters**
 *
 * 1. `DATA`, 32 Bytes - Hash of a block.
 * 2. `Boolean` - If `true` it returns the full transaction objects, if `false` only the
 * hashes of the transactions.
 *
 * **Results**
 *
 * `Object` - A block object, or `null` when no block was found:
 *
 * - `number`: `QUANTITY` - the block number. `null` when its pending block.
 * - `hash`: `DATA`, 32 Bytes - hash of the block. `null` when its pending block.
 * - `parentHash`: `DATA`, 32 Bytes - hash of the parent block.
 * - `nonce`: `DATA`, 8 Bytes - hash of the generated proof-of-work. `null` when its pending
 * block.
 * - `sha3Uncles`: `DATA`, 32 Bytes - SHA3 of the uncles data in the block.
 * - `logsBloom`: `DATA`, 256 Bytes - the bloom filter for the logs of the block. `null`
 * when its pending block.
 * - `transactionsRoot`: `DATA`, 32 Bytes - the root of the transaction trie of the block.
 * - `stateRoot`: `DATA`, 32 Bytes - the root of the final state trie of the block.
 * - `receiptsRoot`: `DATA`, 32 Bytes - the root of the receipts trie of the block.
 * - `miner`: `DATA`, 20 Bytes - the address of the beneficiary to whom the mining rewards
 * were given.
 * - `difficulty`: `QUANTITY` - integer of the difficulty for this block.
 * - `totalDifficulty`: `QUANTITY` - integer of the total difficulty of the chain until this
 * block.
 * - `extraData`: `DATA` - the "extra data" field of this block.
 * - `size`: `QUANTITY` - integer the size of this block in bytes.
 * - `gasLimit`: `QUANTITY` - the maximum gas allowed in this block.
 * - `gasUsed`: `QUANTITY` - the total used gas by all transactions in this block.
 * - `timestamp`: `QUANTITY` - the unix timestamp for when the block was collated.
 * - `transactions`: `Array` - Array of transaction objects, or 32 Bytes transaction hashes
 * depending on the last given parameter.
 * - `uncles`: `Array` - Array of uncle hashes.Returns information about a block by hash.
 */
export interface EthGetBlockByHash {
  jsonrpc: string;
  id: number;
  result?: EthGetBlockByHashResult;
  error?: ErrorClass;
}

export interface ErrorClass {
  code: number;
  message: string;
}

export interface EthGetBlockByHashResult {
  number: string;
  hash: string;
  parentHash: string;
  mixHash: string;
  nonce: Nonce;
  sha3Uncles: string;
  logsBloom: string;
  transactionsRoot: string;
  stateRoot: string;
  receiptsRoot: string;
  miner: string;
  difficulty: string;
  totalDifficulty?: string;
  extraData: string;
  size: string;
  gasLimit: string;
  gasUsed: string;
  timestamp: string;
  transactions?: Array<TransactionClass | string>;
  uncles: any[];
  l1BlockNumber?: L1BlockNumber;
  baseFeePerGas?: string;
  timestampNano?: string;
}

export enum L1BlockNumber {
  The0Xe67000 = "0xe67000",
  The0Xe671A5 = "0xe671a5",
  The0Xe6B51B = "0xe6b51b",
}

export enum Nonce {
  The0X0000000000000000 = "0x0000000000000000",
  The0X64E1A4De4F790E0A = "0x64e1a4de4f790e0a",
  The0Xd812066B6F3D0032 = "0xd812066b6f3d0032",
}

export interface TransactionClass {
  blockHash: string;
  blockNumber: TransactionBlockNumber;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  nonce: string;
  to: string;
  transactionIndex: string;
  value: string;
  v: V;
  r: string;
  s: string;
  l1SequenceNumber?: string;
  parentRequestId?: string;
  indexInParent?: ChainIDEnum;
  arbType?: string;
  arbSubType?: string;
  l1BlockNumber?: L1BlockNumber;
  type?: TransactionType;
  chainId?: ChainIDEnum;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  accessList?: AccessList[];
  queueOrigin?: string;
  l1TxOrigin?: null;
  l1Timestamp?: string;
  index?: string;
  queueIndex?: null;
  rawTransaction?: string;
}

export interface AccessList {
  address: string;
  storageKeys: string[];
}

export enum TransactionBlockNumber {
  The0X1073Ce9 = "0x1073ce9",
  The0X1075346 = "0x1075346",
  The0X128Ddc7 = "0x128ddc7",
  The0X1D0Ee71 = "0x1d0ee71",
  The0X1D0F495 = "0x1d0f495",
  The0X289Bf01 = "0x289bf01",
  The0X289C986 = "0x289c986",
  The0Xd96B2C = "0xd96b2c",
  The0Xe64Fa8 = "0xe64fa8",
  The0Xe65608 = "0xe65608",
}

export enum ChainIDEnum {
  The0X0 = "0x0",
  The0X1 = "0x1",
  The0X38 = "0x38",
  The0X89 = "0x89",
  The0Xfa = "0xfa",
}

export enum TransactionType {
  The0X0 = "0x0",
  The0X1 = "0x1",
  The0X2 = "0x2",
}

export enum V {
  The0X0 = "0x0",
  The0X1 = "0x1",
  The0X135 = "0x135",
  The0X136 = "0x136",
  The0X14986 = "0x14986",
  The0X1B = "0x1b",
  The0X1C = "0x1c",
  The0X217 = "0x217",
  The0X218 = "0x218",
  The0X25 = "0x25",
  The0X26 = "0x26",
  The0X37 = "0x37",
  The0X93 = "0x93",
  The0X94 = "0x94",
}

/**
 * eth_getBlockByNumber
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns information about a block by block number.
 *
 * **Parameters**
 *
 * 1. `QUANTITY|TAG` - integer of a block number, or the string `"earliest"`, `"latest"` or
 * `"pending"`, as in the default block parameter
 * 2. `Boolean` - If `true` it returns the full transaction objects, if `false` only the
 * hashes of the transactions.
 *
 * **Results**
 *
 * `Object` - A block object, or `null` when no block was found:
 *
 * - `number`: `QUANTITY` - the block number. `null` when its pending block.
 * - `hash`: `DATA`, 32 Bytes - hash of the block. `null` when its pending block.
 * - `parentHash`: `DATA`, 32 Bytes - hash of the parent block.
 * - `nonce`: `DATA`, 8 Bytes - hash of the generated proof-of-work. `null` when its pending
 * block.
 * - `sha3Uncles`: `DATA`, 32 Bytes - SHA3 of the uncles data in the block.
 * - `logsBloom`: `DATA`, 256 Bytes - the bloom filter for the logs of the block. `null`
 * when its pending block.
 * - `transactionsRoot`: `DATA`, 32 Bytes - the root of the transaction trie of the block.
 * - `stateRoot`: `DATA`, 32 Bytes - the root of the final state trie of the block.
 * - `receiptsRoot`: `DATA`, 32 Bytes - the root of the receipts trie of the block.
 * - `miner`: `DATA`, 20 Bytes - the address of the beneficiary to whom the mining rewards
 * were given.
 * - `difficulty`: `QUANTITY` - integer of the difficulty for this block.
 * - `totalDifficulty`: `QUANTITY` - integer of the total difficulty of the chain until this
 * block.
 * - `extraData`: `DATA` - the "extra data" field of this block.
 * - `size`: `QUANTITY` - integer the size of this block in bytes.
 * - `gasLimit`: `QUANTITY` - the maximum gas allowed in this block.
 * - `gasUsed`: `QUANTITY` - the total used gas by all transactions in this block.
 * - `timestamp`: `QUANTITY` - the unix timestamp for when the block was collated.
 * - `transactions`: `Array` - Array of transaction objects, or 32 Bytes transaction hashes
 * depending on the last given parameter.
 * - `uncles`: `Array` - Array of uncle hashes.
 */
export interface EthGetBlockByNumber {
  jsonrpc: string;
  id: number;
  result: EthGetBlockByHashResult;
}

/**
 * eth_getBlockTransactionCountByHash
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the number of transactions in a block from a block matching the given block
 * hash.
 *
 * **Parameters**
 *
 * 1. `DATA`, 32 Bytes - hash of a block
 *
 * **Results**
 *
 * `QUANTITY` - integer of the number of transactions in this block.
 */
export interface EthGetBlockTransactionCountByHash {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_getBlockTransactionCountByNumber
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the number of transactions in a block matching the given block number.
 *
 * **Parameters**
 *
 * 1. `QUANTITY|TAG` - integer of a block number, or the string `"earliest"`, `"latest"` or
 * `"pending"`, as in the default block parameter
 *
 * **Results**
 *
 * `QUANTITY` - integer of the number of transactions in this block.
 */
export interface EthGetBlockTransactionCountByNumber {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_chainId
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the chain ID of the current network.
 *
 * **Parameters**
 *
 * none
 *
 * **Results**
 *
 * `quantity` - EIP155 Chain ID.
 */
export interface EthChainID {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_blockNumber
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the number of most recent block.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `QUANTITY` - integer of the current block number the client is on.
 */
export interface EthBlockNumber {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_call
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Executes a new message call immediately without creating a transaction on the block
 * chain.
 *
 * **Parameters**
 *
 * 1. `Object` - The transaction call object
 *
 * - `from`: `DATA`, 20 Bytes - (optional) The address the transaction is sent from.
 * - `to`: `DATA`, 20 Bytes - The address the transaction is directed to.
 * - `gas`: `QUANTITY` - (optional) Integer of the gas provided for the transaction
 * execution. eth_call consumes zero gas, but this parameter may be needed by some
 * executions.
 * - `gasPrice`: `QUANTITY` - (optional) Integer of the gasPrice used for each paid gas
 * - `value`: `QUANTITY` - (optional) Integer of the value sent with this transaction
 * - `data`: `DATA` - (optional) Hash of the method signature and encoded parameters. For
 * details see [Ethereum Contract ABI in the Solidity
 * documentation](https://docs.soliditylang.org/en/latest/abi-spec.html)
 *
 * 2. `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"` or
 * `"pending"`, see the default block parameter
 *
 * **Results**
 *
 * `DATA` - the return value of executed contract.
 */
export interface EthCall {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_estimateGas
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Generates and returns an estimate of how much gas is necessary to allow the transaction
 * to complete. The transaction will not be added to the blockchain. Note that the estimate
 * may be significantly more than the amount of gas actually used by the transaction, for a
 * variety of reasons including EVM mechanics and node performance.
 *
 * **Parameters**
 *
 * See [eth_call](#eth_call) parameters, expect that all properties are optional. If no gas
 * limit is specified geth uses the block gas limit from the pending block as an upper
 * bound. As a result the returned estimate might not be enough to executed the
 * call/transaction when the amount of gas is higher than the pending block gas limit.
 *
 * **Results**
 *
 * `QUANTITY` - the amount of gas used.
 */
export interface EthEstimateGas {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_gasPrice
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the current price per gas in wei.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `QUANTITY` - integer of the current gas price in wei.
 */
export interface EthGasPrice {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_newFilter
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Creates a filter object, based on filter options, to notify when the state changes
 * (logs).
 * To check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).
 *
 * **A note on specifying topic filters:**
 * Topics are order-dependent. A transaction with a log with topics [A, B] will be matched
 * by the following topic filters:
 *
 * - `[]` "anything"
 * - `[A]` "A in first position (and anything after)"
 * - `[null, B]` "anything in first position AND B in second position (and anything after)"
 * - `[A, B]` "A in first position AND B in second position (and anything after)"
 * - `[[A, B], [A, B]]` "(A OR B) in first position AND (A OR B) in second position (and
 * anything after)"
 * - **Parameters**
 *
 * 1. `Object` - The filter options:
 *
 * - `fromBlock`: `QUANTITY|TAG` - (optional, default: `"latest"`) Integer block number, or
 * `"latest"` for the last mined block or `"pending"`, `"earliest"` for not yet mined
 * transactions.
 * - `toBlock`: `QUANTITY|TAG` - (optional, default: `"latest"`) Integer block number, or
 * `"latest"` for the last mined block or `"pending"`, `"earliest"` for not yet mined
 * transactions.
 * - `address`: `DATA|Array`, 20 Bytes - (optional) Contract address or a list of addresses
 * from which logs should originate.
 * - `topics`: `Array of DATA`, - (optional) Array of 32 Bytes `DATA` topics. Topics are
 * order-dependent. Each topic can also be an array of DATA with "or" options.
 *
 * **Results**
 * `QUANTITY` - A filter id.
 */
export interface EthNewFilter {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_newBlockFilter
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Creates a filter in the node, to notify when a new block arrives.
 * To check if the state has changed, call [eth_getFilterChanges](#eth_getfilterchanges).
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 * `QUANTITY` - A filter id.
 */
export interface EthNewBlockFilter {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_newPendingTransactionFilter
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Creates a filter in the node, to notify when new pending transactions arrive. To check if
 * the state has changed, call
 * [eth_getFilterChanges](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges).
 *
 * **Parameters**
 * None
 *
 * **Results**
 * `QUANTITY` - A filter id.
 */
export interface EthNewPendingTransactionFilter {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_uninstallFilter
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Uninstalls a filter with the given id. Should always be called when a watch is no longer
 * needed. Additionally Filters timeout when they aren't requested with
 * [eth_getFilterChanges](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges)
 * for a period of time.
 *
 * **Parameters**
 *
 * 1. `QUANTITY` - The filter id.
 *
 * **Results**
 * `Boolean` - `true` if the filter was successfully uninstalled, otherwise `false`.
 */
export interface EthUninstallFilter {
  jsonrpc: string;
  id: number;
  result: boolean;
}

/**
 * eth_getFilterChanges
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Polling method for a filter, which returns an array of logs which occurred since last
 * poll.
 *
 * **Parameters**
 *
 * 1. `QUANTITY` - the filter id.
 *
 * **Results**
 *
 * `Array` - Array of log objects, or an empty array if nothing has changed since last
 * poll.
 *
 * - For filters created with `eth_newBlockFilter` the return are block hashes (`DATA`, 32
 * Bytes), e.g. `["0x3454645634534..."]`.
 * - For filters created with `eth_newPendingTransactionFilter ` the return are transaction
 * hashes (`DATA`, 32 Bytes), e.g. `["0x6345343454645..."]`.
 * - For filters created with `eth_newFilter` logs are objects with following params:
 * - `removed`: `TAG` - `true` when the log was removed, due to a chain reorganization.
 * `false` if its a valid log.
 * - `logIndex`: `QUANTITY` - integer of the log index position in the block. `null` when
 * its pending log.
 * - `transactionIndex`: `QUANTITY` - integer of the transactions index position log was
 * created from. `null` when its pending log.
 * - `transactionHash`: `DATA`, 32 Bytes - hash of the transactions this log was created
 * from. `null` when its pending log.
 * - `blockHash`: `DATA`, 32 Bytes - hash of the block where this log was in. `null` when
 * its pending. `null` when its pending log.
 * - `blockNumber`: `QUANTITY` - the block number where this log was in. `null` when its
 * pending. `null` when its pending log.
 * - `address`: `DATA`, 20 Bytes - address from which this log originated.
 * - `data`: `DATA` - contains one or more 32 Bytes non-indexed arguments of the log.
 * - `topics`: `Array of DATA` - Array of 0 to 4 32 Bytes `DATA` of indexed log arguments.
 * (In _solidity_: The first topic is the _hash_ of the signature of the event (e.g.
 * `Deposit(address,bytes32,uint256)`), except you declared the event with the `anonymous`
 * specifier.)
 */
export interface EthGetFilterChanges {
  jsonrpc: string;
  id: number;
  result: string[];
}

/**
 * eth_getLogs
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns an array of all logs matching a given filter object.
 *
 * **Parameters**
 *
 * 1. `Object` - The filter options:
 *
 * - `fromBlock`: `QUANTITY|TAG` - (optional, default: `"latest"`) Integer block number, or
 * `"latest"` for the last mined block or `"pending"`, `"earliest"` for not yet mined
 * transactions.
 * - `toBlock`: `QUANTITY|TAG` - (optional, default: `"latest"`) Integer block number, or
 * `"latest"` for the last mined block or `"pending"`, `"earliest"` for not yet mined
 * transactions.
 * - `address`: `DATA|Array`, 20 Bytes - (optional) Contract address or a list of addresses
 * from which logs should originate.
 * - `topics`: `Array of DATA`, - (optional) Array of 32 Bytes `DATA` topics. Topics are
 * order-dependent. Each topic can also be an array of DATA with "or" options.
 * - `blockhash`: `DATA`, 32 Bytes - (optional, **future**) With the addition of EIP-234,
 * `blockHash` will be a new filter option which restricts the logs returned to the single
 * block with the 32-byte hash `blockHash`. Using `blockHash` is equivalent to `fromBlock` =
 * `toBlock` = the block number with hash `blockHash`. If `blockHash` is present in in the
 * filter criteria, then neither `fromBlock` nor `toBlock` are allowed.
 *
 * **Results**
 *
 * `Array` - Array of log objects, or an empty array if nothing has changed since last
 * poll.
 *
 * - For filters created with `eth_newBlockFilter` the return are block hashes (`DATA`, 32
 * Bytes), e.g. `["0x3454645634534..."]`.
 * - For filters created with `eth_newPendingTransactionFilter ` the return are transaction
 * hashes (`DATA`, 32 Bytes), e.g. `["0x6345343454645..."]`.
 * - For filters created with `eth_newFilter` logs are objects with following params:
 * - `removed`: `TAG` - `true` when the log was removed, due to a chain reorganization.
 * `false` if its a valid log.
 * - `logIndex`: `QUANTITY` - integer of the log index position in the block. `null` when
 * its pending log.
 * - `transactionIndex`: `QUANTITY` - integer of the transactions index position log was
 * created from. `null` when its pending log.
 * - `transactionHash`: `DATA`, 32 Bytes - hash of the transactions this log was created
 * from. `null` when its pending log.
 * - `blockHash`: `DATA`, 32 Bytes - hash of the block where this log was in. `null` when
 * its pending. `null` when its pending log.
 * - `blockNumber`: `QUANTITY` - the block number where this log was in. `null` when its
 * pending. `null` when its pending log.
 * - `address`: `DATA`, 20 Bytes - address from which this log originated.
 * - `data`: `DATA` - contains one or more 32 Bytes non-indexed arguments of the log.
 * - `topics`: `Array of DATA` - Array of 0 to 4 32 Bytes `DATA` of indexed log arguments.
 * (In _solidity_: The first topic is the _hash_ of the signature of the event (e.g.
 * `Deposit(address,bytes32,uint256)`), except you declared the event with the `anonymous`
 * specifier.)
 */
export interface EthGetLogs {
  jsonrpc: string;
  id: number;
  result: LogElement[];
}

export interface LogElement {
  address: string;
  topics: string[];
  data: string;
  blockNumber: LogBlockNumber;
  transactionHash: string;
  transactionIndex: string;
  blockHash: string;
  logIndex: string;
  removed: boolean;
}

export enum LogBlockNumber {
  The0X1075346 = "0x1075346",
  The0X10Bbfcc = "0x10bbfcc",
  The0X128Ddc7 = "0x128ddc7",
  The0X1D0F495 = "0x1d0f495",
  The0X1Dd2554 = "0x1dd2554",
  The0X28B3C23 = "0x28b3c23",
  The0Xd96B2C = "0xd96b2c",
  The0Xe64Fa8 = "0xe64fa8",
  The0Xe65608 = "0xe65608",
}

/**
 * eth_getBalance
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the balance of the account of given address.
 *
 * **Parameters**
 *
 * 1. `DATA`, 20 Bytes - address to check for balance.
 * 2. `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"` or
 * `"pending"`, see the default block parameter
 *
 * **Results**
 *
 * `QUANTITY` - integer of the current balance in wei.
 */
export interface EthGetBalance {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_getStorageAt
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the value from a storage position at a given address.
 *
 * **Parameters**
 *
 * 1. `DATA`, 20 Bytes - address of the storage.
 * 2. `QUANTITY` - integer of the position in the storage.
 * 3. `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"` or
 * `"pending"`
 *
 * **Results**
 *
 * `DATA` - the value at this storage position.
 */
export interface EthGetStorageAt {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_getTransactionCount
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the number of transactions sent from an address.
 */
export interface EthGetTransactionCount {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_getCode
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns code at a given address.
 *
 * **Parameters**
 *
 * 1. `DATA`, 20 Bytes - address
 * 2. `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"` or
 * `"pending"`
 *
 * **Results**
 *
 * `DATA` - the code from the given address.
 */
export interface EthGetCode {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_sendRawTransaction
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Creates new message call transaction or a contract creation for signed transactions.
 *
 * **Parameters**
 *
 * 1. `DATA`, The signed transaction data.
 *
 * **Results**
 *
 * `DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet
 * available.
 *
 * Use [eth_getTransactionReceipt](#eth_gettransactionreceipt) to get the contract address,
 * after the transaction was mined, when you created a contract.
 */
export interface EthSendRawTransaction {
  id: number;
  jsonrpc: string;
  result: string;
}

/**
 * eth_getTransactionByHash
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the information about a transaction requested by transaction hash.
 *
 * **Parameters**
 *
 * 1. `DATA`, 32 Bytes - hash of a transaction
 *
 * **Results**
 *
 * `Object` - A transaction object, or `null` when no transaction was found:
 *
 * - `blockHash`: `DATA`, 32 Bytes - hash of the block where this transaction was in. `null`
 * when its pending.
 * - `blockNumber`: `QUANTITY` - block number where this transaction was in. `null` when its
 * pending.
 * - `from`: `DATA`, 20 Bytes - address of the sender.
 * - `gas`: `QUANTITY` - gas provided by the sender.
 * - `gasPrice`: `QUANTITY` - gas price provided by the sender in Wei.
 * - `hash`: `DATA`, 32 Bytes - hash of the transaction.
 * - `input`: `DATA` - the data send along with the transaction.
 * - `nonce`: `QUANTITY` - the number of transactions made by the sender prior to this one.
 * - `to`: `DATA`, 20 Bytes - address of the receiver. `null` when its a contract creation
 * transaction.
 * - `transactionIndex`: `QUANTITY` - integer of the transactions index position in the
 * block. `null` when its pending.
 * - `value`: `QUANTITY` - value transferred in Wei.
 * - `v`: `QUANTITY` - ECDSA recovery id
 * - `r`: `QUANTITY` - ECDSA signature r
 * - `s`: `QUANTITY` - ECDSA signature s
 */
export interface EthGetTransactionByHash {
  jsonrpc: string;
  id: number;
  result: TransactionClass;
}

/**
 * eth_getTransactionByBlockHashAndIndex
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns information about a transaction by block hash and transaction index position.
 *
 * **Parameters**
 *
 * 1. `DATA`, 32 Bytes - hash of a block.
 * 2. `QUANTITY` - integer of the transaction index position.
 *
 * **Results**
 *
 * `Object` - A transaction object, or `null` when no transaction was found:
 *
 * - `blockHash`: `DATA`, 32 Bytes - hash of the block where this transaction was in. `null`
 * when its pending.
 * - `blockNumber`: `QUANTITY` - block number where this transaction was in. `null` when its
 * pending.
 * - `from`: `DATA`, 20 Bytes - address of the sender.
 * - `gas`: `QUANTITY` - gas provided by the sender.
 * - `gasPrice`: `QUANTITY` - gas price provided by the sender in Wei.
 * - `hash`: `DATA`, 32 Bytes - hash of the transaction.
 * - `input`: `DATA` - the data send along with the transaction.
 * - `nonce`: `QUANTITY` - the number of transactions made by the sender prior to this one.
 * - `to`: `DATA`, 20 Bytes - address of the receiver. `null` when its a contract creation
 * transaction.
 * - `transactionIndex`: `QUANTITY` - integer of the transactions index position in the
 * block. `null` when its pending.
 * - `value`: `QUANTITY` - value transferred in Wei.
 * - `v`: `QUANTITY` - ECDSA recovery id
 * - `r`: `QUANTITY` - ECDSA signature r
 * - `s`: `QUANTITY` - ECDSA signature s
 */
export interface EthGetTransactionByBlockHashAndIndex {
  jsonrpc: string;
  id: number;
  result: TransactionClass;
}

/**
 * eth_getTransactionByBlockNumberAndIndex
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns information about a transaction by block number and transaction index position.
 *
 * **Parameters**
 *
 * 1. `QUANTITY|TAG` - a block number, or the string `"earliest"`, `"latest"` or
 * `"pending"`, as in the default block parameter
 * 2. `QUANTITY` - the transaction index position.
 *
 * **Results**
 *
 * `Object` - A transaction object, or `null` when no transaction was found:
 *
 * - `blockHash`: `DATA`, 32 Bytes - hash of the block where this transaction was in. `null`
 * when its pending.
 * - `blockNumber`: `QUANTITY` - block number where this transaction was in. `null` when its
 * pending.
 * - `from`: `DATA`, 20 Bytes - address of the sender.
 * - `gas`: `QUANTITY` - gas provided by the sender.
 * - `gasPrice`: `QUANTITY` - gas price provided by the sender in Wei.
 * - `hash`: `DATA`, 32 Bytes - hash of the transaction.
 * - `input`: `DATA` - the data send along with the transaction.
 * - `nonce`: `QUANTITY` - the number of transactions made by the sender prior to this one.
 * - `to`: `DATA`, 20 Bytes - address of the receiver. `null` when its a contract creation
 * transaction.
 * - `transactionIndex`: `QUANTITY` - integer of the transactions index position in the
 * block. `null` when its pending.
 * - `value`: `QUANTITY` - value transferred in Wei.
 * - `v`: `QUANTITY` - ECDSA recovery id
 * - `r`: `QUANTITY` - ECDSA signature r
 * - `s`: `QUANTITY` - ECDSA signature s
 */
export interface EthGetTransactionByBlockNumberAndIndex {
  jsonrpc: string;
  id: number;
  result: TransactionClass;
}

/**
 * eth_getTransactionReceipt
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the receipt of a transaction by transaction hash.
 *
 * **Note** That the receipt is not available for pending transactions.
 *
 * **Parameters**
 *
 * 1. `DATA`, 32 Bytes - hash of a transaction
 *
 * **Results**
 *
 * `Object` - A transaction receipt object, or `null` when no receipt was found:
 *
 * - `transactionHash `: `DATA`, 32 Bytes - hash of the transaction.
 * - `transactionIndex`: `QUANTITY` - integer of the transactions index position in the
 * block.
 * - `blockHash`: `DATA`, 32 Bytes - hash of the block where this transaction was in.
 * - `blockNumber`: `QUANTITY` - block number where this transaction was in.
 * - `from`: `DATA`, 20 Bytes - address of the sender.
 * - `to`: `DATA`, 20 Bytes - address of the receiver. null when its a contract creation
 * transaction.
 * - `cumulativeGasUsed `: `QUANTITY ` - The total amount of gas used when this transaction
 * was executed in the block.
 * - `gasUsed `: `QUANTITY ` - The amount of gas used by this specific transaction alone.
 * - `contractAddress `: `DATA`, 20 Bytes - The contract address created, if the transaction
 * was a contract creation, otherwise `null`.
 * - `logs`: `Array` - Array of log objects, which this transaction generated.
 * - `logsBloom`: `DATA`, 256 Bytes - Bloom filter for light clients to quickly retrieve
 * related logs.
 * It also returns _either_ :
 * - `root` : `DATA` 32 bytes of post-transaction stateroot (pre Byzantium)
 * - `status`: `QUANTITY` either `1` (success) or `0` (failure)
 */
export interface EthGetTransactionReceipt {
  jsonrpc: string;
  id: number;
  result: EthGetTransactionReceiptResult;
}

export interface EthGetTransactionReceiptResult {
  transactionHash: string;
  transactionIndex: string;
  blockHash: string;
  blockNumber: TransactionBlockNumber;
  from: string;
  to: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  effectiveGasPrice?: string;
  contractAddress: null;
  logs: LogElement[];
  logsBloom: string;
  status: ChainIDEnum;
  returnCode?: ChainIDEnum;
  returnData?: string;
  feeStats?: FeeStats;
  l1BlockNumber?: L1BlockNumber;
  l1InboxBatchInfo?: null;
  type?: TransactionType;
  l1Fee?: string;
  l1FeeScalar?: string;
  l1GasPrice?: string;
  l1GasUsed?: string;
}

export interface FeeStats {
  prices: Paid;
  unitsUsed: Paid;
  paid: Paid;
}

export interface Paid {
  l1Transaction: string;
  l1Calldata: string;
  l2Storage: string;
  l2Computation: string;
}

/**
 * web3_clientVersion
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the current client version.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `String` - The current client version
 */
export interface Web3ClientVersion {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * web3_sha3
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns Keccak-256 (_not_ the standardized SHA3-256) of the given data.
 *
 * **Parameters**
 *
 * 1. `DATA` - the data to convert into a SHA3 hash
 *
 * **Results**
 *
 * `DATA` - The SHA3 result of the given string.
 */
export interface Web3Sha3 {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * net_version
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the current network id.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `String` - The current network id.
 *
 * The full list of current network IDs is available at
 * [chainlist.org](https://chainlist.org). Sopme common ones are:
 * `1`: Ethereum Mainnet
 * `2`: Morden testnet (now deprecated)
 * `3`: Ropsten testnet
 * `4`: Rinkeby testnet
 * `5`: Goerli testnet
 */
export interface NetVersion {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * arbtrace_block
 *
 * POST https://{{ARBI_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns traces created at given block.
 *
 * **Parameters**
 *
 * `Quantity or Tag` - Integer of a block number, or the string 'earliest', 'latest' or
 * 'pending'.
 *
 * **Results**
 *
 * `Array` - Block traces.
 */
export interface ArbtraceBlock {
  jsonrpc: string;
  id: number;
  result: ArbtraceBlockResult[];
}

export interface ArbtraceBlockResult {
  action: PurpleAction;
  blockHash: string;
  blockNumber: number;
  result: TraceResult;
  subtraces: number;
  traceAddress: number[];
  transactionHash: string;
  transactionPosition: number;
  type: CallTypeEnum;
}

export interface PurpleAction {
  callType: CallTypeEnum;
  from: string;
  gas: string;
  input: string;
  to: string;
  value: ActionValue;
}

export enum CallTypeEnum {
  Call = "call",
  Delegatecall = "delegatecall",
  Staticcall = "staticcall",
}

export enum ActionValue {
  The0X0 = "0x0",
  The0X186A0 = "0x186a0",
  The0X1Db194293758Ca0 = "0x1db194293758ca0",
  The0X410D586A20A4C0000 = "0x410d586a20a4c0000",
  The0X731788C67D080 = "0x731788c67d080",
  The0X73Aada19669Dc = "0x73aada19669dc",
  The0X935152E995C = "0x935152e995c",
}

export interface TraceResult {
  gasUsed: string;
  output?: string;
}

/**
 * arbtrace_call
 *
 * POST https://{{ARBI_HOST}}/apikey/{{API_KEY}}/
 *
 * Executes the given call and returns a number of possible traces for it.
 *
 * **Parameters**
 *
 * - `Object` - Transaction object where from field is optional and nonce field is ommited.
 * - `Array` - Type of trace, one or more of: "vmTrace", "trace", "stateDiff".
 * - `Quantity` or `Tag` - (optional) Integer of a block number, or the string `'earliest'`,
 * `'latest'` or `'pending'`.
 *
 * **Results**
 *
 * `Array` - Block traces.
 */
export interface ArbtraceCall {
  jsonrpc: string;
  id: number;
  result: ArbtraceCallResult;
}

export interface ArbtraceCallResult {
  output: string;
  stateDiff: null;
  trace: PurpleTrace[];
  vmTrace: null;
  destroyedContracts?: null;
}

export interface PurpleTrace {
  action: PurpleAction;
  error?: string;
  subtraces: number;
  traceAddress: number[];
  type: CallTypeEnum;
  result?: TraceResult;
  transactionHash?: string;
}

/**
 * arbtrace_callMany
 *
 * POST https://{{ARBI_HOST}}/apikey/{{API_KEY}}/
 *
 * Performs multiple call traces on top of the same block. i.e. transaction `n` will be
 * executed on top of a pending block with all `n-1` transactions applied (traced) first.
 * Allows to trace dependent transactions.
 *
 * **Parameters**
 *
 * - `Array` - List of trace calls with the type of trace, one or more of: `"vmTrace"`,
 * `"trace"`, `"stateDiff"`.
 * - `Quantity` or `Tag` - (optional) Integer of a block number, or the string `'earliest'`,
 * `'latest'` or `'pending'`.
 *
 * **Results**
 *
 * `Array` - Array of the given transactions’ traces
 */
export interface ArbtraceCallMany {
  jsonrpc: string;
  id: number;
  result: ArbtraceCallResult[];
}

/**
 * arbtrace_filter
 *
 * POST https://{{ARBI_HOST}}/apikey/{{API_KEY}}/
 *
 * Return all traces of the given filter
 *
 * **Parameters**
 *
 * - `Object` - The filter object
 * - `fromBlock`: `Quantity` or `Tag` - (optional) From this block.
 * - `toBlock`: `Quantity` or `Tag` - (optional) To this block.
 * - `fromAddress`: `Array` - (optional) Sent from these addresses.
 * - `toAddress`: `Address` - (optional) Sent to these addresses.
 * - `after`: `Quantity` - (optional) The offset trace number
 * - `count`: `Quantity` - (optional) Integer number of traces to display in a batch.
 *
 * **Results**
 *
 * `Array` - Traces matching given filter
 */
export interface ArbtraceFilter {
  jsonrpc: string;
  id: string;
  result: ArbtraceBlockResult[];
}

/**
 * arbtrace_replayBlockTransactions
 *
 * POST https://{{ARBI_HOST}}/apikey/{{API_KEY}}/
 *
 * Replays all transactions in a block returning the requested traces for each transaction.
 *
 * **Parameters**
 *
 * - `Quantity` or `Tag` - Integer of a block number, or the string `'earliest'`, `'latest'`
 * or `'pending'`.
 * - `Array` - Type of trace, one or more of: `"vmTrace"`, `"trace"`, `"stateDiff"`.
 *
 * **Results**
 *
 * `Array` - Block transactions traces.
 */
export interface ArbtraceReplayBlockTransactions {
  jsonrpc: string;
  id: number;
  result: ArbtraceCallResult[];
}

/**
 * arbtrace_replayTransaction
 *
 * POST https://{{ARBI_HOST}}/apikey/{{API_KEY}}/
 *
 * Replays a transaction, returning the traces.
 *
 * **Parameters**
 *
 * - `Hash` - Transaction hash
 * - `Array` - Type of trace, one or more of: `"vmTrace"`, `"trace"`, `"stateDiff"`
 *
 * **Results**
 *
 * `Object` - Block traces
 */
export interface ArbtraceReplayTransaction {
  jsonrpc: string;
  id: number;
  result: ArbtraceCallResult;
}

/**
 * arbtrace_transaction
 *
 * POST https://{{ARBI_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns all traces of given transaction.
 *
 * **Parameters**
 *
 * - `Hash` - Transaction hash
 *
 * **Results**
 *
 * `Array` - Traces of given transaction
 */
export interface ArbtraceTransaction {
  jsonrpc: string;
  id: number;
  result: ArbtraceBlockResult[];
}

/**
 * eth_getUncleCountByBlockHash
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the number of uncles in a block from a block matching the given block hash.
 *
 * **Parameters**
 *
 * `DATA`, 32 Bytes - hash of a block
 *
 * **Results**
 *
 * `QUANTITY` - integer of the number of uncles in this block.
 */
export interface EthGetUncleCountByBlockHash {
  jsonrpc: string;
  id: number;
  result: ChainIDEnum;
}

/**
 * eth_getUncleCountByBlockNumber
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the number of uncles in a block from a block matching the given block number.
 *
 * **Parameters**
 *
 * 1. `QUANTITY|TAG` - integer of a block number, or the string "latest", "earliest" or
 * "pending", see the default block parameter
 *
 * **Results**
 *
 * `QUANTITY` - integer of the number of uncles in this block.
 */
export interface EthGetUncleCountByBlockNumber {
  jsonrpc: string;
  id: number;
  result: ChainIDEnum;
}

/**
 * eth_getUncleByBlockHashAndIndex
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns information about an uncle of a block by hash and uncle index position.
 *
 * **Parameters**
 *
 * 1. `DATA`, 32 Bytes - The hash of a block.
 * 2. `QUANTITY` - The uncle's index position.
 *
 * **Results**
 *
 * `Object` - A block object, or `null` when no block was found:
 *
 * - `number`: `QUANTITY` - the block number. `null` when its pending block.
 * - `hash`: `DATA`, 32 Bytes - hash of the block. `null` when its pending block.
 * - `parentHash`: `DATA`, 32 Bytes - hash of the parent block.
 * - `nonce`: `DATA`, 8 Bytes - hash of the generated proof-of-work. `null` when its pending
 * block.
 * - `sha3Uncles`: `DATA`, 32 Bytes - SHA3 of the uncles data in the block.
 * - `logsBloom`: `DATA`, 256 Bytes - the bloom filter for the logs of the block. `null`
 * when its pending block.
 * - `transactionsRoot`: `DATA`, 32 Bytes - the root of the transaction trie of the block.
 * - `stateRoot`: `DATA`, 32 Bytes - the root of the final state trie of the block.
 * - `receiptsRoot`: `DATA`, 32 Bytes - the root of the receipts trie of the block.
 * - `miner`: `DATA`, 20 Bytes - the address of the beneficiary to whom the mining rewards
 * were given.
 * - `difficulty`: `QUANTITY` - integer of the difficulty for this block.
 * - `totalDifficulty`: `QUANTITY` - integer of the total difficulty of the chain until this
 * block.
 * - `extraData`: `DATA` - the "extra data" field of this block.
 * - `size`: `QUANTITY` - integer the size of this block in bytes.
 * - `gasLimit`: `QUANTITY` - the maximum gas allowed in this block.
 * - `gasUsed`: `QUANTITY` - the total used gas by all transactions in this block.
 * - `timestamp`: `QUANTITY` - the unix timestamp for when the block was collated.
 * - `transactions`: `Array` - Array of transaction objects, or 32 Bytes transaction hashes
 * depending on the last given parameter.
 * - `uncles`: `Array` - Array of uncle hashes.Returns information about a block by hash.
 *
 * **Note**: An uncle doesn't contain individual transactions.
 */
export interface EthGetUncleByBlockHashAndIndex {
  jsonrpc: string;
  id: number;
  result: EthGetBlockByHashResult | null;
}

/**
 * eth_getUncleByBlockNumberAndIndex
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns information about an uncle of a block by number and uncle index position.
 *
 * **Parameters**
 *
 * 1. `QUANTITY|TAG` - a block number, or the string `"earliest"`, `"latest"` or
 * `"pending"`, as in the default block parameter
 * 2. `QUANTITY` - the uncle's index position.
 *
 * **Results**
 *
 * `Object` - A block object, or `null` when no block was found:
 *
 * - `number`: `QUANTITY` - the block number. `null` when its pending block.
 * - `hash`: `DATA`, 32 Bytes - hash of the block. `null` when its pending block.
 * - `parentHash`: `DATA`, 32 Bytes - hash of the parent block.
 * - `nonce`: `DATA`, 8 Bytes - hash of the generated proof-of-work. `null` when its pending
 * block.
 * - `sha3Uncles`: `DATA`, 32 Bytes - SHA3 of the uncles data in the block.
 * - `logsBloom`: `DATA`, 256 Bytes - the bloom filter for the logs of the block. `null`
 * when its pending block.
 * - `transactionsRoot`: `DATA`, 32 Bytes - the root of the transaction trie of the block.
 * - `stateRoot`: `DATA`, 32 Bytes - the root of the final state trie of the block.
 * - `receiptsRoot`: `DATA`, 32 Bytes - the root of the receipts trie of the block.
 * - `miner`: `DATA`, 20 Bytes - the address of the beneficiary to whom the mining rewards
 * were given.
 * - `difficulty`: `QUANTITY` - integer of the difficulty for this block.
 * - `totalDifficulty`: `QUANTITY` - integer of the total difficulty of the chain until this
 * block.
 * - `extraData`: `DATA` - the "extra data" field of this block.
 * - `size`: `QUANTITY` - integer the size of this block in bytes.
 * - `gasLimit`: `QUANTITY` - the maximum gas allowed in this block.
 * - `gasUsed`: `QUANTITY` - the total used gas by all transactions in this block.
 * - `timestamp`: `QUANTITY` - the unix timestamp for when the block was collated.
 * - `transactions`: `Array` - Array of transaction objects, or 32 Bytes transaction hashes
 * depending on the last given parameter.
 * - `uncles`: `Array` - Array of uncle hashes.Returns information about a block by hash.
 *
 * **Note**: An uncle doesn't contain individual transactions.
 */
export interface EthGetUncleByBlockNumberAndIndex {
  jsonrpc: string;
  id: number;
  result: EthGetBlockByHashResult | null;
}

/**
 * eth_protocolVersion
 *
 * POST https://{{OPTIMISM_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the current Ethereum protocol version.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `String` - The current Ethereum protocol version
 */
export interface EthProtocolVersion {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_syncing
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns an object with data about the sync status or `false`.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `Object|Boolean`, An object with sync status data or `FALSE`, when not syncing:
 *
 * - `startingBlock`: `QUANTITY` - The block at which the import started (will only be
 * reset, after the sync reached his head)
 * - `currentBlock`: `QUANTITY` - The current block, same as eth_blockNumber
 * - `highestBlock`: `QUANTITY` - The estimated highest block
 */
export interface EthSyncing {
  jsonrpc: string;
  id: number;
  result: boolean;
}

/**
 * eth_feeHistory
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the transaction fee history.
 *
 * **Parameters**
 *
 * `BLOCKCOUNT` - Number of blocks in the requested range. 1 ~ 1024 blocks can be requested
 * in a single query. Less than requested may be returned if not all blocks are available.
 * `NEWESTBLOCK` - Highest number of blocks in the requested range.
 * `REWARDPERCENTILES` - (optional) Percentage values between 0 and 100, sampled in
 * ascending order.
 *
 * **Results**
 *
 * `OLDESTBLOCK` - Smallest number block of the returned range.
 * `BASEFEEPERGAS` - An array of block base fees per gas. This includes the next block after
 * the newest of the returned range, because this value can be derived from the newest
 * block. Zeroes are returned for pre-EIP-1559 blocks.
 * `GASUSEDRATIO` - An array of gas usage. Which is calculated as the ratio of gasUsed and
 * gasLimit.
 * `REWARD` - (Optional) An array of effective priority fee per gas data points from a
 * single block. All zeroes are returned if the block is empty.
 */
export interface EthFeeHistory {
  jsonrpc: string;
  id: number;
  result: EthFeeHistoryResult;
}

export interface EthFeeHistoryResult {
  oldestBlock: string;
  reward: Array<string[]>;
  baseFeePerGas: string[];
  gasUsedRatio: number[];
}

/**
 * eth_sendTransaction
 *
 * POST https://{{FTM_HOST}}/apikey/{{API_KEY}}/
 *
 * Creates new message call transaction or a contract creation, if the data field contains
 * code.
 *
 * **Parameters**
 *
 * 1. `Object` - The transaction object
 *
 * - `from`: `DATA`, 20 Bytes - The address the transaction is sent from.
 * - `to`: `DATA`, 20 Bytes - (optional when creating new contract) The address the
 * transaction is directed to.
 * - `gas`: `QUANTITY` - (optional, default: 90000) Integer of the gas provided for the
 * transaction execution. It will return unused gas.
 * - `gasPrice`: `QUANTITY` - (optional, default: To-Be-Determined) Integer of the gasPrice
 * used for each paid gas.
 * - `value`: `QUANTITY` - (optional) Integer of the value sent with this transaction.
 * - `data`: `DATA` - The compiled code of a contract OR the hash of the invoked method
 * signature and encoded parameters.
 * - `nonce`: `QUANTITY` - (optional) Integer of a nonce. This allows to overwrite your own
 * pending transactions that use the same nonce.
 *
 * **Results**
 *
 * `DATA`, 32 Bytes - the transaction hash, or the zero hash if the transaction is not yet
 * available.
 *
 * Use [eth_getTransactionReceipt](#eth_gettransactionreceipt) to get the contract address,
 * after the transaction was mined, when you created a contract.
 */
export interface EthSendTransaction {
  id: number;
  jsonrpc: string;
  result: string;
}

/**
 * net_listening
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns `true` if client is actively listening for network connections.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `Boolean` - `true` when listening, otherwise `false`.
 */
export interface NetListening {
  jsonrpc: string;
  id: number;
  result: boolean;
}

/**
 * net_peerCount
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns number of peers currently connected to the client.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `QUANTITY` - integer of the number of connected peers.
 */
export interface NetPeerCount {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * debug_traceBlockByHash
 *
 * POST https://{{OPTIMISM_HOST}}/apikey/{{API_KEY}}/
 *
 * The `debug_traceBlockByHash` method will return a full stack trace of all invoked opcodes
 * of all transaction that were included in this block.
 *
 * **Parameters**
 *
 * `hash` - Hash of the block to be traced.
 *
 * **Results**
 *
 * `array` - Block traces, which have the following object shape (all return types are in
 * hex values):
 * `results` - Trace Object, which has the following fields:
 * - `calls` - Array of transactions in the block with the following fields -
 * - `from` - Address
 * - `gas` - Quantity
 * - `gasused` - Quantity
 * - `input` - Data
 * - `output` - Data
 * - `to` - Address
 * - `type` - Data
 * - `value` - Quantity
 */
export interface DebugTraceBlockByHash {
  jsonrpc: string;
  id: number;
  result: DebugTraceBlockByHashResult[];
}

export interface DebugTraceBlockByHashResult {
  type?: CallType;
  from?: string;
  to?: string;
  value?: string;
  gas?: string;
  gasUsed?: string;
  input?: string;
  output?: string;
  time?: string;
  calls?: ResultCall[];
  error?: string;
  result?: CallElement;
}

export interface ResultCall {
  type: CallType;
  from: string;
  to: string;
  gas?: string;
  gasUsed?: string;
  input: string;
  output?: string;
  value?: string;
  calls?: PurpleCall[];
  error?: string;
}

export interface PurpleCall {
  type: CallType;
  from: string;
  to: string;
  value?: string;
  gas?: string;
  gasUsed?: string;
  input: string;
  output?: string;
  calls?: FluffyCall[];
  error?: string;
}

export interface FluffyCall {
  type: CallType;
  from: string;
  to: string;
  gas?: string;
  gasUsed?: string;
  input: string;
  output: string;
  value?: string;
  calls?: TentacledCall[];
}

export interface TentacledCall {
  type: CallType;
  from: string;
  to: string;
  value?: CallValue;
  gas: string;
  gasUsed: string;
  input: string;
  output: string;
  calls?: StickyCall[];
}

export interface StickyCall {
  type: CallType;
  from: string;
  to: string;
  value?: CallValue;
  gas: string;
  gasUsed: string;
  input: string;
  output: string;
  calls?: IndigoCall[];
}

export interface IndigoCall {
  type: CallType;
  from: string;
  to: string;
  gas: string;
  gasUsed: string;
  input: string;
  output: string;
  value?: ChainIDEnum;
  calls?: CallElement[];
}

export interface CallElement {
  type: CallType;
  from: string;
  to: string;
  gas?: string;
  gasUsed?: string;
  input?: string;
  output?: string;
  calls?: CallElement[];
  value?: string;
  time?: string;
  error?: string;
}

export enum CallType {
  Call = "CALL",
  Delegatecall = "DELEGATECALL",
  Selfdestruct = "SELFDESTRUCT",
  Staticcall = "STATICCALL",
}

export enum CallValue {
  The0X0 = "0x0",
  The0X1A5F25Bf37Cdd738 = "0x1a5f25bf37cdd738",
  The0X46C6D6Faa27E0000 = "0x46c6d6faa27e0000",
  The0Xba5Cc2A38B51F4 = "0xba5cc2a38b51f4",
}

/**
 * debug_traceBlockByNumber
 *
 * POST https://{{OPTIMISM_HOST}}/apikey/{{API_KEY}}/
 *
 * The `debug_traceBlockByNumber` method will return a full stack trace of all invoked
 * opcodes of all transaction that were included in this block.
 *
 * **Parameters**
 *
 * `quantity` - Number of the block to be traced or the string 'latest', 'earliest' or
 * 'pending'.
 *
 * **Results**
 *
 * `array` - Block traces, which have the following object shape (all return types are in
 * hex values):
 * `results` - Trace Object, which has the following fields:
 * - `calls` - Array of transactions in the block with the following fields -
 * - `from` - Address
 * - `gas` - Quantity
 * - `gasused` - Quantity
 * - `input` - Data
 * - `output` - Data
 * - `to` - Address
 * - `type` - Data
 * - `value` - Quantity
 */
export interface DebugTraceBlockByNumber {
  jsonrpc: string;
  id: number;
  result: DebugTraceBlockByNumberResult[];
}

export interface DebugTraceBlockByNumberResult {
  type?: CallType;
  from?: string;
  to?: string;
  value?: string;
  gas?: string;
  gasUsed?: string;
  input?: string;
  output?: string;
  time?: string;
  error?: string;
  calls?: CallElement[];
  result?: CallElement;
}

/**
 * debug_traceCall
 *
 * POST https://{{BNB_HOST}}/apikey/{{API_KEY}}/
 *
 * The `debug_traceCall` method will return a full stack trace of all invoked opcodes of all
 * transaction that were included in this block.
 *
 * **Parameters**
 *
 * `from` - (optional) wallet address the transaction is sent from.
 * `to` - wallet address the transaction is sent to.
 * `gas` - (optional) gas provided for the transaction
 * `gasprice` - (optional) gasPrice
 * `value` - (optional) Integer of the value sent with the transaction in hexadecimal.
 * `data` - (optional) hash of the method signature and encoded parameters
 * `quantity` - Number of the block or the string 'latest', 'earliest' or 'pending'.
 *
 * **Results**
 *
 * `array` - Block traces, which have the following object shape (all return types are in
 * hex values):
 * `results` - Trace Object, which has the following fields:
 * - `failed` - Address
 * - `gas` - Quantity
 * - `returnvalue` - Data
 * - `structlogs` - Array
 * - `entries` - Array
 * - `storagesbydepth` - Array
 */
export interface DebugTraceCall {
  jsonrpc: string;
  id: number;
  result: CallElement;
}

/**
 * debug_traceTransaction
 *
 * POST https://{{OPTIMISM_HOST}}/apikey/{{API_KEY}}/
 *
 * The `debug_traceTransaction` method will return a full stack trace of all invoked opcodes
 * of all transaction that were included in this block.
 *
 * **Parameters**
 *
 * `hash` - The hash of the transaction
 *
 * **Results**
 *
 * `array` - Block traces, which have the following object shape (all return types are in
 * hex values):
 * `results` - Trace Object, which has the following fields:
 * - `failed` - Address
 * - `gas` - Quantity
 * - `returnvalue` - Data
 * - `structlogs` - Array
 * - `entries` - Array
 * - `storagesbydepth` - Array
 */
export interface DebugTraceTransaction {
  jsonrpc: string;
  id: number;
  result: DebugTraceTransactionResult;
}

export interface DebugTraceTransactionResult {
  structLogs: StructLog[];
  gas: number;
  failed: boolean;
  returnValue: string;
}

export interface StructLog {
  pc: number;
  op: string;
  gas: number;
  gasCost: number;
  depth: number;
  stack: string[];
  memory: Memory[];
  storage?: Storage;
}

export enum Memory {
  Ddf252Ad1Be2C89B69C2B068Fc378Daa952Ba7F163C4A11628F55A4Df523B3Ef = "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
  The0000000000000000000000000000000000000000000000000000000000000000 = "0000000000000000000000000000000000000000000000000000000000000000",
  The0000000000000000000000000000000000000000000000000000000000000001 = "0000000000000000000000000000000000000000000000000000000000000001",
  The0000000000000000000000000000000000000000000000000000000000000002 = "0000000000000000000000000000000000000000000000000000000000000002",
  The0000000000000000000000000000000000000000000000000000000000000006 = "0000000000000000000000000000000000000000000000000000000000000006",
  The0000000000000000000000000000000000000000000000000000000000000007 = "0000000000000000000000000000000000000000000000000000000000000007",
  The0000000000000000000000000000000000000000000000000000000000000026 = "0000000000000000000000000000000000000000000000000000000000000026",
  The0000000000000000000000000000000000000000000000000000000000000080 = "0000000000000000000000000000000000000000000000000000000000000080",
  The00000000000000000000000000000000000000000000000000000000000000C0 = "00000000000000000000000000000000000000000000000000000000000000c0",
  The00000000000000000000000000000000000000000000000000000000000000E0 = "00000000000000000000000000000000000000000000000000000000000000e0",
  The0000000000000000000000000000000000000000000000000000000000Dd09F3 = "0000000000000000000000000000000000000000000000000000000000dd09f3",
  The00000000000000000000000000000000000000000000000018022Af86A765Fe4 = "00000000000000000000000000000000000000000000000018022af86a765fe4",
  The000000000000000000000000000000000000000000000002713C04C12Abfa000 = "000000000000000000000000000000000000000000000002713c04c12abfa000",
  The000000000000000000000000000000000000000000000038E0B6B80C13990000 = "000000000000000000000000000000000000000000000038e0b6b80c13990000",
  The0000000000000000000000000000000000000000000000791De5363111A94800 = "0000000000000000000000000000000000000000000000791de5363111a94800",
  The00000000000000000000000000000000000000000000007935E761297C1Fa7E4 = "00000000000000000000000000000000000000000000007935e761297c1fa7e4",
  The00000000000000000000000024E555A72337F0Abada9B44682E96F389A840D22 = "00000000000000000000000024e555a72337f0abada9b44682e96f389a840d22",
  The0000000000000000000000009A33Ac49D3373147Da47752E20B322Afbe9Fe367 = "0000000000000000000000009a33ac49d3373147da47752e20b322afbe9fe367",
  The000000000000000000000000Acd03D601E5Bb1B275Bb94076Ff46Ed9D753435A = "000000000000000000000000acd03d601e5bb1b275bb94076ff46ed9d753435a",
  The000000000000000000000000E770A9B68B55337Fef4735F9B85Cc4C94A678Bc5 = "000000000000000000000000e770a9b68b55337fef4735f9b85cc4c94a678bc5",
  The000000000000000000000000F89D7B9C864F589Bbf53A82105107622B35Eaa40 = "000000000000000000000000f89d7b9c864f589bbf53a82105107622b35eaa40",
  The3666Efe22E33C569Fc876Bff26320E0158Eeffaec9D700B56C2B4Cf5Bd114792 = "3666efe22e33c569fc876bff26320e0158eeffaec9d700b56c2b4cf5bd114792",
  The42455032303A207472616E7366657220616D6F756E7420657863656564732062 = "42455032303a207472616e7366657220616d6f756e7420657863656564732062",
  The616C616E63650000000000000000000000000000000000000000000000000000 = "616c616e63650000000000000000000000000000000000000000000000000000",
}

export interface Storage {
  "821cb013502325932fa3d43007deca7c397e13d13f2b43bbcf1733ca209b2061"?: Memory;
  "399c89bd9e90b83b1616ce64935ab91d879e2e1fdbeb025f0931095fc89ec2d3"?: string;
  "8032bbaad8dc69cb68b83388864605a6aa8ca1caae933b253bd93051aa37ad0b"?: string;
  "360094ce6c655a8bbdb1695d22f84dfe815538d7259e407494aed322bef674e0"?: Memory;
  "78574c7ffbd7dd283bff4799acfefb24d5c609f60219539af8122487366f418d"?: The78574C7Ffbd7Dd283Bff4799Acfefb24D5C609F60219539Af8122487366F418D;
  "205178f5910c1498558b8fdaca7264697405785237106f35bc2650de102fd2c3"?: Memory;
  "3666efe22e33c569fc876bff26320e0158eeffaec9d700b56c2b4cf5bd114792"?: Memory;
  "03558f7ba197f242f0bb44341730306d7fb7d34abf546ad434a4b9d692f5e61d"?: The03558F7Ba197F242F0Bb44341730306D7Fb7D34Abf546Ad434A4B9D692F5E61D;
}

export enum The03558F7Ba197F242F0Bb44341730306D7Fb7D34Abf546Ad434A4B9D692F5E61D {
  The0000000000000000000000000000000000000000000000000000000000Dd09F3 = "0000000000000000000000000000000000000000000000000000000000dd09f3",
  The000000000000000000000000000000000000007935E761297C1Fa7E400Dd09F3 = "000000000000000000000000000000000000007935e761297c1fa7e400dd09f3",
}

export enum The78574C7Ffbd7Dd283Bff4799Acfefb24D5C609F60219539Af8122487366F418D {
  The000000000000000000000000000000000000000000002C10B5E88E66339642D7 = "000000000000000000000000000000000000000000002c10b5e88e66339642d7",
}

/**
 * trace_block
 *
 * POST https://{{FTM_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns traces created at given block.
 *
 * **Parameters**
 *
 * `Quantity or Tag` - Integer of a block number, or the string 'earliest', 'latest' or
 * 'pending'.
 *
 * **Results**
 *
 * `Array` - Block traces.
 */
export interface TraceBlock {
  jsonrpc: string;
  id: number;
  result: TraceBlockResult[];
}

export interface TraceBlockResult {
  action: FluffyAction;
  blockHash: string;
  blockNumber: number;
  result?: TraceResult | null;
  subtraces: number;
  traceAddress: number[];
  transactionHash?: string;
  transactionPosition?: number;
  type: PurpleType;
  error?: ErrorEnum;
}

export interface FluffyAction {
  from?: string;
  callType?: CallTypeEnum;
  gas?: string;
  input?: string;
  to?: string;
  value?: string;
  address?: string;
  refundAddress?: RefundAddress;
  balance?: ChainIDEnum;
  author?: string;
  rewardType?: string;
}

export enum RefundAddress {
  The0X0000000000004946C0E9F43F4Dee607B0Ef1Fa1C = "0x0000000000004946c0e9f43f4dee607b0ef1fa1c",
}

export enum ErrorEnum {
  Reverted = "Reverted",
}

export enum PurpleType {
  Call = "call",
  Reward = "reward",
  Suicide = "suicide",
}

/**
 * trace_call
 *
 * POST https://{{ETH_HOST}}/apikey/{{API_KEY}}/
 *
 * Executes the given call and returns a number of possible traces for it.
 *
 * **Parameters**
 *
 * - `Object` - Transaction object where from field is optional and nonce field is ommited.
 * - `Array` - Type of trace, one or more of: "vmTrace", "trace", "stateDiff".
 * - `Quantity` or `Tag` - (optional) Integer of a block number, or the string `'earliest'`,
 * `'latest'` or `'pending'`.
 *
 * **Results**
 *
 * `Array` - Block traces.
 */
export interface TraceCall {
  jsonrpc: string;
  id: number;
  result: ArbtraceCallResult;
}

/**
 * trace_callMany
 *
 * POST https://{{ETH_HOST}}/apikey/{{API_KEY}}/
 *
 * Performs multiple call traces on top of the same block. i.e. transaction `n` will be
 * executed on top of a pending block with all `n-1` transactions applied (traced) first.
 * Allows to trace dependent transactions.
 *
 * **Parameters**
 *
 * - `Array` - List of trace calls with the type of trace, one or more of: `"vmTrace"`,
 * `"trace"`, `"stateDiff"`.
 * - `Quantity` or `Tag` - (optional) Integer of a block number, or the string `'earliest'`,
 * `'latest'` or `'pending'`.
 *
 * **Results**
 *
 * `Array` - Array of the given transactions’ traces
 */
export interface TraceCallMany {
  jsonrpc: string;
  id: number;
  result: ArbtraceCallResult[];
}

/**
 * trace_replayTransaction
 *
 * POST https://{{ETH_HOST}}/apikey/{{API_KEY}}/
 *
 * Replays a transaction, returning the traces.
 *
 * **Parameters**
 *
 * - `Hash` - Transaction hash
 * - `Array` - Type of trace, one or more of: `"vmTrace"`, `"trace"`, `"stateDiff"`
 *
 * **Results**
 *
 * `Object` - Block traces
 */
export interface TraceReplayTransaction {
  jsonrpc: string;
  id: number;
  result: ArbtraceCallResult;
}

/**
 * trace_transaction
 *
 * POST https://{{FTM_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns all traces of given transaction.
 *
 * **Parameters**
 *
 * - `Hash` - Transaction hash
 *
 * **Results**
 *
 * `Array` - Traces of given transaction
 */
export interface TraceTransaction {
  jsonrpc: string;
  id: number;
  result: ArbtraceBlockResult[];
}

/**
 * trace_filter
 *
 * POST https://{{FTM_HOST}}/apikey/{{API_KEY}}/
 *
 * Return all traces of the given filter
 *
 * **Parameters**
 *
 * - `Object` - The filter object
 * - `fromBlock`: `Quantity` or `Tag` - (optional) From this block.
 * - `toBlock`: `Quantity` or `Tag` - (optional) To this block.
 * - `fromAddress`: `Array` - (optional) Sent from these addresses.
 * - `toAddress`: `Address` - (optional) Sent to these addresses.
 * - `after`: `Quantity` - (optional) The offset trace number
 * - `count`: `Quantity` - (optional) Integer number of traces to display in a batch.
 *
 * **Results**
 *
 * `Array` - Traces matching given filter
 */
export interface TraceFilter {
  jsonrpc: string;
  id: number;
  result: ArbtraceBlockResult[];
}

/**
 * trace_replayBlockTransactions
 *
 * POST https://{{FTM_HOST}}/apikey/{{API_KEY}}/
 *
 * Replays all transactions in a block returning the requested traces for each transaction.
 *
 * **Parameters**
 *
 * - `Quantity` or `Tag` - Integer of a block number, or the string `'earliest'`, `'latest'`
 * or `'pending'`.
 * - `Array` - Type of trace, one or more of: `"vmTrace"`, `"trace"`, `"stateDiff"`.
 *
 * **Results**
 *
 * `Array` - Block transactions traces.
 */
export interface TraceReplayBlockTransactions {
  jsonrpc: string;
  id: number;
  result: TraceReplayBlockTransactionsResult[];
}

export interface TraceReplayBlockTransactionsResult {
  output?: string;
  stateDiff?: null;
  trace?: FluffyTrace[];
  vmTrace?: null;
  transactionHash: string;
  action?: PurpleAction;
  blockHash?: string;
  blockNumber?: number;
  error?: ErrorEnum;
  subtraces?: number;
  traceAddress?: number[];
  transactionPosition?: number;
  type?: CallTypeEnum;
  result?: TraceResult;
}

export interface FluffyTrace {
  action: FluffyAction;
  result: TraceResult | null;
  subtraces: number;
  traceAddress: number[];
  type: PurpleType;
  error?: ErrorEnum;
}

/**
 * txpool_status
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns a tx pool status.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * - `pending` - Total number of pending transactions in the txpool (in hex format).
 * - `queued` - Total number of queued transactions in the txpool (in hex format).
 */
export interface TxpoolStatus {
  jsonrpc: string;
  id: number;
  result: TxpoolStatusResult;
}

export interface TxpoolStatusResult {
  baseFee?: string;
  pending: string;
  queued: string;
}

/**
 * eth_mining
 *
 * POST https://{{OPTIMISM_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns `true` if client is actively mining new blocks.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `Boolean` - returns `true` of the client is mining, otherwise `false`.
 */
export interface EthMining {
  jsonrpc: string;
  id: number;
  result: boolean;
}

/**
 * eth_hashrate
 *
 * POST https://{{OPTIMISM_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the number of hashes per second that the node is mining with.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `QUANTITY` - number of hashes per second.
 */
export interface EthHashrate {
  jsonrpc: string;
  id: number;
  result: ChainIDEnum;
}

/**
 * eth_getWork
 *
 * POST https://{{ETH_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the hash of the current block, the seedHash, and the boundary condition to be met
 * ("target").
 *
 * **Parameters**
 * None
 *
 * **Results**
 * `Array` - Array with the following properties:
 *
 * 1. `DATA`, 32 Bytes - current block header pow-hash
 * 2. `DATA`, 32 Bytes - the seed hash used for the DAG.
 * 3. `DATA`, 32 Bytes - the boundary condition ("target"), 2^256 / difficulty.
 */
export interface EthGetWork {
  jsonrpc: string;
  id: number;
  error: ErrorClass;
}

/**
 * eth_submitWork
 *
 * POST https://{{ETH_HOST}}/apikey/{{API_KEY}}/
 *
 * Used for submitting a proof-of-work solution.
 *
 * **Parameters**
 *
 * 1. `DATA`, 8 Bytes - The nonce found (64 bits)
 * 2. `DATA`, 32 Bytes - The header's pow-hash (256 bits)
 * 3. `DATA`, 32 Bytes - The mix digest (256 bits)
 *
 * **Results**
 * `Boolean` - returns `true` if the provided solution is valid, otherwise `false`.
 */
export interface EthSubmitWork {
  jsonrpc: string;
  id: number;
  result: boolean;
}

/**
 * eth_sign
 *
 * POST https://{{OPTIMISM_HOST}}/apikey/{{API_KEY}}/
 *
 * The sign method calculates an Ethereum specific signature with:
 * `sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)))`.
 *
 * By adding a prefix to the message makes the calculated signature recognizable as an
 * Ethereum specific signature. This prevents misuse where a malicious dapp can sign
 * arbitrary data (e.g. transaction) and use the signature to impersonate the victim.
 *
 * Note: the address to sign with must be unlocked.
 *
 * **Parameters**
 *
 * 1. `DATA`, 20 Bytes - address
 * 2. `DATA`, N Bytes - message to sign
 *
 * **Results**
 *
 * `DATA`: Signature
 */
export interface EthSign {
  id: number;
  jsonrpc: string;
  result: string;
}

/**
 * eth_signTransaction
 *
 * POST https://{{OPTIMISM_HOST}}/apikey/{{API_KEY}}/
 *
 * Signs a transaction that can be submitted to the network at a later time using with
 * [eth_sendRawTransaction](#eth_sendrawtransaction).
 *
 * **Parameters**
 *
 * 1. `Object` - The transaction object
 *
 * - `from`: `DATA`, 20 Bytes - The address the transaction is sent from.
 * - `to`: `DATA`, 20 Bytes - (optional when creating new contract) The address the
 * transaction is directed to.
 * - `gas`: `QUANTITY` - (optional, default: 90000) Integer of the gas provided for the
 * transaction execution. It will return unused gas.
 * - `gasPrice`: `QUANTITY` - (optional, default: To-Be-Determined) Integer of the gasPrice
 * used for each paid gas, in Wei.
 * - `value`: `QUANTITY` - (optional) Integer of the value sent with this transaction, in
 * Wei.
 * - `data`: `DATA` - The compiled code of a contract OR the hash of the invoked method
 * signature and encoded parameters.
 * - `nonce`: `QUANTITY` - (optional) Integer of a nonce. This allows to overwrite your own
 * pending transactions that use the same nonce.
 *
 * **Results**
 *
 * `DATA`, The signed transaction object.
 */
export interface EthSignTransaction {
  id: number;
  jsonrpc: string;
  result: string;
}

/**
 * dag_getHeads
 *
 * POST https://{{FTM_HOST}}/apikey/{{API_KEY}}/
 *
 * `dag_getHeads` returns IDs of all the epoch events with no descendants in a given epoch.
 *
 * **Parameters**
 *
 * `string` - epoch number (in hex format) and for specific epoch (pass `“latest”` for
 * latest epoch; pass `“pending”` for latest sealed epoch).
 *
 * **Results**
 *
 * `array` - Array of event IDs
 */
export interface DagGetHeads {
  jsonrpc: string;
  id: number;
  result: string[];
}

/**
 * dag_getEvent
 *
 * POST https://{{FTM_HOST}}/apikey/{{API_KEY}}/
 *
 * `dag_getEvent` returns Lachesis event by hash or short ID.
 *
 * **Parameters**
 *
 * `string` - The full event ID (in hex format, 32 bytes) or short event ID.
 *
 * **Results**
 *
 * - `version` - event version
 * - `epoch` - event epoch number
 * - `seq` - event sequence number
 * - `hash` - `DATA` full event ID
 * - `frame` - event frame number
 * - `creator` - the address of the event creator / validator
 * - `prevEpochHash` - the hash of the state of previous epoch
 * - `parents` - array of event IDs
 * - `gasPowerLeft` - event's not spent gas power
 * - `gasPowerUsed` - gas power spent on event
 * - `lamport` - Lamport index of the event
 * - `creationTime` - the UnixNano timestamp of creator's local creation time
 * - `medianTime` - the UnixNano timestamp of the secure median time
 * - `extraData` - the "extra data" field of the event
 * - `transactionsRoot` - the root of the transaction trie of the event.
 *
 * If no event found it returns `null`
 */
export interface DagGetEvent {
  jsonrpc: string;
  id: number;
  result: DagGetEventResult;
}

export interface DagGetEventResult {
  anyBlockVotes: boolean;
  anyEpochVote: boolean;
  anyMisbehaviourProofs: boolean;
  anyTxs: boolean;
  creationTime: string;
  creator: ChainIDEnum;
  epoch: string;
  extraData: string;
  frame: string;
  gasPowerLeft: GasPowerLeft;
  gasPowerUsed: string;
  id: string;
  lamport: string;
  medianTime: string;
  networkVersion: ChainIDEnum;
  parents: string[];
  payloadHash: string;
  prevEpochHash: null;
  seq: string;
  version: ChainIDEnum;
  size?: string;
  transactions?: any[];
}

export interface GasPowerLeft {
  longTerm: string;
  shortTerm: string;
}

/**
 * dag_getEventPayload
 *
 * POST https://{{FTM_HOST}}/apikey/{{API_KEY}}/
 *
 * `dag_getEventPayload` returns event (including transactions) by hash or short ID.
 *
 * **Parameters**
 *
 * - `string` - The full event ID (in hex format, 32 bytes) or short event ID.
 * - `boolean` - Returns the full transaction objects, if it false then returns only the
 * hashes of the transactions.
 *
 * **Results**
 *
 * - `version` - event version
 * - `epoch` - event epoch number
 * - `seq` - event sequence number
 * - `hash` - `DATA` full event ID
 * - `frame` - event frame number
 * - `creator` - the address of the event creator / validator
 * - `prevEpochHash` - the hash of the state of previous epoch
 * - `parents` - array of event IDs
 * - `gasPowerLeft` - event's not spent gas power
 * - `gasPowerUsed` - gas power spent on event
 * - `lamport` - Lamport index of the event
 * - `creationTime` - the UnixNano timestamp of creator's local creation time
 * - `medianTime` - the UnixNano timestamp of the secure median time
 * - `extraData` - the "extra data" field of the event
 * - `transactionsRoot` - the root of the transaction trie of the event.
 *
 * If no event found it returns `null`
 */
export interface DagGetEventPayload {
  jsonrpc: string;
  id: number;
  result: DagGetEventResult;
}

/**
 * eth_coinbase
 *
 * POST https://{{OPTIMISM_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the client's coinbase address.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `DATA`, 20 bytes - the current coinbase address.
 */
export interface EthCoinbase {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * eth_accounts
 *
 * POST https://{{OPTIMISM_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns a list of addresses owned by the client.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `Array` of `DATA`, 20 Bytes - addresses owned by the client.
 */
export interface EthAccounts {
  jsonrpc: string;
  id: number;
  result: string[];
}

/**
 * eth_getProof
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the account- and storage-values of the specified account including the
 * Merkle-proof.
 *
 * **Parameters**
 *
 * `DATA`, 20 Bytes - address of the account.
 * `ARRAY`, 32 Bytes - array of storage-keys which should be proofed and included. See
 * eth_getStorageAt
 * `QUANTITY`|`TAG` - integer block number, or the string "latest" or "earliest", see the
 * default block parameter
 *
 * **Results**
 *
 * - `balance`: `QUANTITY` - the balance of the account. See eth_getBalance
 * - `codeHash`: `DATA`, 32 Bytes - hash of the code of the account. For a simple Account
 * without code it will return
 * "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"
 * - `nonce`: `QUANTITY`, - nonce of the account. See eth_getTransactionCount
 * - `storageHash`: `DATA`, 32 Bytes - SHA3 of the StorageRoot. All storage will deliver a
 * MerkleProof starting with this rootHash.
 * - `accountProof`: `ARRAY` - Array of rlp-serialized MerkleTree-Nodes, starting with the
 * stateRoot-Node, following the path of the SHA3 (address) as key.
 * - `storageProof`: ARRAY - Array of storage-entries as requested. Each entry is a object
 * with these properties:
 * - `key`: `QUANTITY` - the requested storage key
 * - `value`: `QUANTITY` - the storage value
 * - `proof`: `ARRAY` - Array of rlp-serialized MerkleTree-Nodes, starting with the
 * storageHash-Node, following the path of the SHA3 (key) as path.
 */
export interface EthGetProof {
  jsonrpc: string;
  id: number;
  result: EthGetProofResult;
}

export interface EthGetProofResult {
  address: string;
  accountProof: string[];
  balance: string;
  codeHash: string;
  nonce: ChainIDEnum;
  storageHash: string;
  storageProof: StorageProof[];
}

export interface StorageProof {
  key: string;
  value: ChainIDEnum;
  proof: string[];
}

/**
 * trace_get
 *
 * POST https://{{FTM_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns trace at given position.
 *
 * **Parameters**
 *
 * - `Hash` - Transaction hash
 * - `Array` - Index positions of the traces.
 *
 * **Results**
 *
 * `Object` - Trace object
 */
export interface TraceGet {
  jsonrpc: string;
  id: number;
  result: ArbtraceBlockResult[];
}

/**
 * txpool_content
 *
 * POST https://{{FTM_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns tx pool content.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `blockHash` - block hash where this transaction was in, `null` here.
 * `blockNumber` - Block number where this transaction was added encoded as a hexadecimal,
 * `null` here.
 * `from` - Sender's address
 * `gas` - Gas used in the transaction.
 * `gasPrice` - Total amount in wei the sender wants to pay for the transaction.
 * `hash` - Transaction hash.
 * `input` - Encoded transaction input data.
 * `nonce` - Number of transactions by the sender
 * `r` - ECDSA signature r.
 * `s` - ECDSA signature s.
 * `to` - Receiver's address. `null` if it's a contract creation transaction.
 * `transactionIndex` - Integer of the transactions index position in the block encoded as a
 * hexadecimal.
 * `type` - A number between 0 and 0x7f, for a total of 128 possible transaction types.
 * `v` - ECDSA recovery id encoded as a hexadecimal.
 * `value` - Value transferred in Wei encoded as a hexadecimal.
 */
export interface TxpoolContent {
  jsonrpc: string;
  id: number;
  result: TxpoolContentResult;
}

export interface TxpoolContentResult {
  pending: Pending;
  queued: PurpleQueued;
}

export interface Pending {
  "0x148257747A283DA493d9CA3B1536ea924B3eFEa6": The0X148257747A283DA493D9CA3B1536Ea924B3EFEa6;
  "0x1537Ef8a944131B55FA36c69c178817CDd0f52D5": The0X1537Ef8A944131B55FA36C69C178817CDd0F52D5;
  "0x1960ac996521e700a4FB52a558a5F228e5c4EaEE": The0X1960Ac996521E700A4FB52A558A5F228E5C4EaEE;
  "0x23B581A459dCB50C6f948437193F6afA9C42Af0d": The0X23B581A459DCB50C6F948437193F6AFA9C42Af0D;
  "0x491E59c255C790D4e3a53CEC2632524088f1aaA4": The0X491E59C255C790D4E3A53CEC2632524088F1AaA4;
  "0x67CEee314BF56e6B1aa3615D2673aAa176A73Cd9": The0X67CEee314BF56E6B1Aa3615D2673AAa176A73Cd9;
  "0x68A01716C8E44842fe52FEbef8b7a6c2E6c97948": The0X68A01716C8E44842Fe52FEbef8B7A6C2E6C97948;
  "0xA522c16734B69c7EFa94141b7997C6Dfc7750aD5": The0XA522C16734B69C7EFa94141B7997C6Dfc7750AD5;
  "0xAEda47EBC8E72822C0788072F03d56f01f6585E7": The0XAEda47EBC8E72822C0788072F03D56F01F6585E7;
  "0xAF738f443273009F5026A2bcf1253Af4855e1A00": The0XAF738F443273009F5026A2Bcf1253Af4855E1A00;
  "0xF5B24CA76AbC8ACa570003574950e550ad32a9F6": The0XF5B24CA76AbC8ACa570003574950E550Ad32A9F6;
  "0xb1212072BfBf65Ce859090401dcDA73f4667Eb19": The0Xb1212072BfBf65Ce859090401DcDA73F4667Eb19;
  "0xb121216e5964332D12821DC845D87873fC710B86": The0Xb121216E5964332D12821DC845D87873FC710B86;
  "0xb12129842E22752f0f456a03310cd39b35973F1F": The0Xb12129842E22752F0F456A03310Cd39B35973F1F;
  "0xb1212b55F688973B1441F9209e120d9A154B2817": The0Xb1212B55F688973B1441F9209E120D9A154B2817;
  "0xb1212c146809080DD988d9A2C5102064ed2D4C29": The0Xb1212C146809080DD988D9A2C5102064Ed2D4C29;
  "0xb1212caB43AdE17d6031CD4f8af87c2FFfa429B0": The0Xb1212CAB43AdE17D6031CD4F8Af87C2FFfa429B0;
  "0xd80282ad5FdA238173792164fB5e3b566d73C71f": The0Xd80282Ad5FdA238173792164FB5E3B566D73C71F;
}

export interface The0X148257747A283DA493D9CA3B1536Ea924B3EFEa6 {
  "938": The938;
}

export interface The938 {
  blockHash: null;
  blockNumber: null;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  nonce: string;
  to: string;
  transactionIndex: null;
  value: The938_Value;
  type: TransactionType;
  v: V;
  r: string;
  s: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  accessList?: any[];
  chainId?: ChainIDEnum;
}

export enum The938_Value {
  The0X0 = "0x0",
  The0X1D856E360Ad152Db6 = "0x1d856e360ad152db6",
  The0Xde0B6B3A7640000 = "0xde0b6b3a7640000",
  The0Xf803 = "0xf803",
}

export interface The0X1537Ef8A944131B55FA36C69C178817CDd0F52D5 {
  "365": The938;
}

export interface The0X1960Ac996521E700A4FB52A558A5F228E5C4EaEE {
  "72": The938;
}

export interface The0X23B581A459DCB50C6F948437193F6AFA9C42Af0D {
  "8476": The938;
}

export interface The0X491E59C255C790D4E3A53CEC2632524088F1AaA4 {
  "167846": The938;
}

export interface The0X67CEee314BF56E6B1Aa3615D2673AAa176A73Cd9 {
  "163": The938;
}

export interface The0X68A01716C8E44842Fe52FEbef8B7A6C2E6C97948 {
  "890": The938;
}

export interface The0XA522C16734B69C7EFa94141B7997C6Dfc7750AD5 {
  "20642": The938;
}

export interface The0XAEda47EBC8E72822C0788072F03D56F01F6585E7 {
  "280": The938;
}

export interface The0XAF738F443273009F5026A2Bcf1253Af4855E1A00 {
  "833": The938;
}

export interface The0XF5B24CA76AbC8ACa570003574950E550Ad32A9F6 {
  "949": The938;
}

export interface The0Xb1212072BfBf65Ce859090401DcDA73F4667Eb19 {
  "1018": The938;
}

export interface The0Xb121216E5964332D12821DC845D87873FC710B86 {
  "1024": The938;
}

export interface The0Xb12129842E22752F0F456A03310Cd39B35973F1F {
  "991": The938;
}

export interface The0Xb1212B55F688973B1441F9209E120D9A154B2817 {
  "1002": The938;
}

export interface The0Xb1212C146809080DD988D9A2C5102064Ed2D4C29 {
  "1028": The938;
}

export interface The0Xb1212CAB43AdE17D6031CD4F8Af87C2FFfa429B0 {
  "1017": The938;
}

export interface The0Xd80282Ad5FdA238173792164FB5E3B566D73C71F {
  "316": The938;
}

export interface PurpleQueued {
  "0x010622794fED49C7967aA45f4B6F27cC1CD82Eba": { [key: string]: The938 };
  "0x23E5Bf083FDb8E85AB7732FD3e8B4497d8c64829": Purple0X23E5Bf083FDb8E85AB7732FD3E8B4497D8C64829;
  "0x256f5DeA6f428B2efD2cAbA555E5a64959e26dc6": { [key: string]: The938 };
  "0x2E2f2a72aeC2D7838faE45f53F5dBf34A022119F": { [key: string]: The938 };
  "0x43B23071524318D3620C18430a20eeeBe2CA5639": { [key: string]: The938 };
  "0x4C82e5913ecAc685c2458F9A0AE31dBB19Cd61fb": { [key: string]: The938 };
  "0x7c48b3308f27Ce45EA40BB0593b1355bef17F992": { [key: string]: The938 };
  "0x81BEE7e18817b4170Bd49E916ec7F7C07e5F3CAf": Purple0X81BEE7E18817B4170Bd49E916Ec7F7C07E5F3CAF;
  "0x8Db89388FA485c6b85074140B865C946Dc23f652": { [key: string]: The938 };
  "0x986416d12BCB1a5cCCB15E291A491D2eEFe3613c": The0X986416D12BCB1A5CCCB15E291A491D2EEFe3613C;
  "0x9dE8ffcB974D3b023A9526fA822CA2e83d3F47aA": { [key: string]: The938 };
  "0x9eB63eFFD7312da3D6786d2A9dc213349EBEc310": { [key: string]: The938 };
  "0xB424a0595421878c05f673ED7E44Ac21ea797adb": { [key: string]: The938 };
  "0xBEa580e76bd54D29F546D7cD6cc7E11DD75a3b03": { [key: string]: The938 };
  "0xa71c833b93d5F59b7B99be4079336cfA4B00Cc85": { [key: string]: The938 };
  "0xbcA98dA3874b0071574b64CD08e4eC6ABc866e92": { [key: string]: The938 };
  "0xbf513FD334263719C3d09e058684aDd23e1A9ADb": The0Xbf513FD334263719C3D09E058684ADd23E1A9ADB;
  "0xc7fFA0cFd0A0a85df1Ddd9Df0C73caa5D16e6C6A": { [key: string]: The938 };
  "0xd9230c5F426d15BeC21e24Fea53223825d428A08": { [key: string]: The938 };
  "0xdeCAF836e03B56738bDdBB906e99407805A3d3Bd": { [key: string]: The938 };
  "0xfeA4A07f89274Ae04e52466Df2fd71223aD89acF": The0XfeA4A07F89274Ae04E52466Df2Fd71223AD89ACF;
}

export interface Purple0X23E5Bf083FDb8E85AB7732FD3E8B4497D8C64829 {
  "1490": The938;
}

export interface Purple0X81BEE7E18817B4170Bd49E916Ec7F7C07E5F3CAF {
  "17339856": The938;
}

export interface The0X986416D12BCB1A5CCCB15E291A491D2EEFe3613C {
  "440644800000": The938;
}

export interface The0Xbf513FD334263719C3D09E058684ADd23E1A9ADB {
  "9": The938;
}

export interface The0XfeA4A07F89274Ae04E52466Df2Fd71223AD89ACF {
  "31803686": The938;
}

/**
 * txpool_inspect
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns a detailed info on tx pool transactions.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * - `pending` - Array of transaction objects, with textual data.
 * - `queued` - Array of transaction objects, with textual data.
 */
export interface TxpoolInspect {
  jsonrpc: string;
  id: number;
  result: TxpoolInspectResult;
}

export interface TxpoolInspectResult {
  pending: { [key: string]: { [key: string]: string } };
  queued: FluffyQueued;
}

export interface FluffyQueued {
  "0x010622794fED49C7967aA45f4B6F27cC1CD82Eba"?: { [key: string]: string };
  "0x04294eEfa1a6f8DA147430F9f3b65b3aa27C9243"?: { [key: string]: string };
  "0x10546e6866AEddFa0b9515F92329b87eb94FD5c5"?: { [key: string]: string };
  "0x23E5Bf083FDb8E85AB7732FD3e8B4497d8c64829"?: Fluffy0X23E5Bf083FDb8E85AB7732FD3E8B4497D8C64829;
  "0x2E2f2a72aeC2D7838faE45f53F5dBf34A022119F"?: { [key: string]: string };
  "0x313b05A62Eb1305E42fA8bb34b00208a9CAcF22E"?: The0X237Ae304662011EC3A549A9BeED08789Ffcc5881Class;
  "0x3a6C03f344eA98376717fFBF6d5e3d048eC8F2Ee"?: { [key: string]: string };
  "0x43439db7948a81D1FB2CF189b6184bBa39Ba61eb"?: { [key: string]: string };
  "0x6E693d3D0Fe5b983596Fe4F996f2dea649c27D43"?: { [key: string]: string };
  "0x7287c3d93b89B7f9153fEE6Ef086Cd2858e9B9EB"?: { [key: string]: string };
  "0x7c48b3308f27Ce45EA40BB0593b1355bef17F992"?: { [key: string]: string };
  "0x801Ea6Ce48A33982d0616DA4f2D0e6Bf7C006525"?: { [key: string]: string };
  "0x81BEE7e18817b4170Bd49E916ec7F7C07e5F3CAf"?: Fluffy0X81BEE7E18817B4170Bd49E916Ec7F7C07E5F3CAF;
  "0x8Db89388FA485c6b85074140B865C946Dc23f652"?: { [key: string]: string };
  "0xA2B57BdEb2099122A1dD64B6CB0f262Eb14C71fE"?: { [key: string]: string };
  "0xB424a0595421878c05f673ED7E44Ac21ea797adb"?: { [key: string]: string };
  "0xC635A21BbE922108bfA1dCDd7d8547b28d193ad3"?: The0XC635A21BbE922108BfA1DCDd7D8547B28D193Ad3;
  "0xDECAf80be095dc4930cAB62499d818423a39D4cA"?: { [key: string]: string };
  "0x003Fc838440c94009C0754291c6f4997f92307Fc"?: { [key: string]: string };
  "0x007927f19F23DE8c885Cb156da4D81567D5E81Ee"?: { [key: string]: string };
  "0x02c9EC59Ff9efaBA3D2547B65013CdE0565a9185"?: { [key: string]: string };
  "0x02db423190E26c76904B4Ad3c25228E660361FB0"?: { [key: string]: string };
  "0x03894fdCEac4f26bF5D15358423CE05bcaAa9785"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x041236B70b3668c67ffFC2B980734c5bCdF84096"?: { [key: string]: string };
  "0x0652d218619790c6589E3819faB3442AE4524821"?: { [key: string]: string };
  "0x089a06D35190180B9AACDb671D0e0877c3a94096"?: { [key: string]: string };
  "0x09F98486FF232C207f867FB80ec573A47dC93EAB"?: { [key: string]: string };
  "0x0A49022f3022d7697Fe8405146DB2c1f3a77c62C"?: { [key: string]: string };
  "0x0Aa480D09A2301364D6AcEFAEA1d5Ca57028E933"?: { [key: string]: string };
  "0x0B5e0a9514220A06a7601e64F30873836c6E1332"?: { [key: string]: string };
  "0x0a7341dcE26A95da28d19AA5A6ED4e7156Cf0fD6"?: { [key: string]: string };
  "0x0d332c1a2726cEE2bE7b05990075571d40589a3E"?: The0X0D332C1A2726CEE2BE7B05990075571D40589A3EClass;
  "0x0deDc17b6725774b68F3b78C524DeD22c7f57059"?: The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class;
  "0x10150b6B0a7d2932E398086eBAE06Bc75eE89bee"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x106f0896746cF66e2843014b4f04cf7f5d075514"?: { [key: string]: string };
  "0x10BD47662eC8080B2Dc0cDeCA4F90B52f1b2A5fE"?: { [key: string]: string };
  "0x13077b6b77e05e35a29C11822a96f0B015D94a40"?: { [key: string]: string };
  "0x135440Ef6185e265B564BC6051a594F8e436f7E5"?: The0X135440Ef6185E265B564BC6051A594F8E436F7E5;
  "0x15Ae61dC17af689CE3e7FcD30C5f5eeB86a0F315"?: { [key: string]: string };
  "0x1707128c8Ab9829d5c632957dA6e4cd6732D46B1"?: { [key: string]: string };
  "0x19f23b3e3B415201F88c9ECAB63fC250803b99Fb"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0x1BC96f3399738636566508ddE02f4a9A58aF10de"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0x1CC8D9A4e54B32fecD9bB7c96a482D95309E7Dc5"?: { [key: string]: string };
  "0x1DF21B578d664D7274d1bb317cc0365fcb96E78C"?: { [key: string]: string };
  "0x1Ef0B7BC6251fC89Cb492789973E12589b9444E5"?: { [key: string]: string };
  "0x1F3284AB25eBE5daEB9a276d045626bd2e1aE9F8"?: { [key: string]: string };
  "0x1F93821B34A6FB59a40685976622BC38a091FB17"?: The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class;
  "0x1a87522be6582E5Ce5Ef9eaC57D5fe916AF41768"?: The0X0D332C1A2726CEE2BE7B05990075571D40589A3EClass;
  "0x1acb2706499C59B064E2607E6f4bD07390dD7757"?: { [key: string]: string };
  "0x1b4B6450EDcf89374db509af04C0c6a5d9D12b4f"?: { [key: string]: string };
  "0x1dBa219f52A9e7826c77365AAf2B8Fa2a4318Ece"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x1eb03A5505F2B6F3Cef3ef155fA56591eA9FE182"?: { [key: string]: string };
  "0x1f18D0742C213f596eE206e19662B86f8a8D9701"?: { [key: string]: string };
  "0x1f9d77F7b96B7b6d05717CA7d0C99b7D89E797e3"?: { [key: string]: string };
  "0x2128040680e02f7ba78d985334CA13cD69351C28"?: { [key: string]: string };
  "0x21AcBd7A2E961048C814D08F1e95817092124421"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x222D211D8241f14DA4A9ab19f65E200036E412Ba"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x237ae304662011eC3A549A9BeED08789Ffcc5881"?: The0X237Ae304662011EC3A549A9BeED08789Ffcc5881Class;
  "0x24c7FD8df19f1D364578fCA03d996e76679B403E"?: The0X24C7FD8Df19F1D364578FCA03D996E76679B403EClass;
  "0x2517412c0DdE2e8e42e4E3403477aef3B9cC6bAb"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x2697B646c356F2CBd0ED1F24B9382683B7f437f9"?: { [key: string]: string };
  "0x26Ebcae3Ac8321810AcAFa201FbA56297ECc8de1"?: { [key: string]: string };
  "0x2761D97c728859A2F117aEB8c11A597eE776B4B2"?: { [key: string]: string };
  "0x27d73F291930daD988D2E12a4BA1aF8d9206eC7e"?: { [key: string]: string };
  "0x29ADD6490c45e8791405DB824418c31c27194960"?: The0X24C7FD8Df19F1D364578FCA03D996E76679B403EClass;
  "0x29fD23958825930025c47181a90f30E0C63182b4"?: { [key: string]: string };
  "0x2A6c9dE84FbCa7193053EA42c8110d0F07714b74"?: { [key: string]: string };
  "0x2B0611cFCd73aa0d830c11D372397AE283E5cAd9"?: { [key: string]: string };
  "0x2C39bBE19C58B651Bb7185C9188bEBa30251c83c"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0x2a7d7bD23414Ef4ebAe12dF858a26a251E6B75b7"?: { [key: string]: string };
  "0x2beB7950a72aA280762BBc8aA0eD3C30064c4b75"?: The0X2BeB7950A72AA280762BBc8AA0ED3C30064C4B75;
  "0x2ea884c5E4Eb17Bd9369E552C9f7475f13EC53c7"?: { [key: string]: string };
  "0x2f23404E885730cD1D0D2c1f24BD099a9F78749A"?: { [key: string]: string };
  "0x2fD5928Ecf49B98bb981144fF9c195727a16a442"?: { [key: string]: string };
  "0x3121a55978C5840a68B344063375D71801a329CD"?: { [key: string]: string };
  "0x3325fC55c961D0A0Dba3cb5435Eaf4042f72E455"?: { [key: string]: string };
  "0x33aA5fCc98bf7328366bA0616009C75AC2f0381C"?: { [key: string]: string };
  "0x342048cA92C8E4b9DE8B77A9C63812DC30b4d608"?: { [key: string]: string };
  "0x35b39680E7D461AB8C9c472c0d8817fAA9Ea2AD5"?: { [key: string]: string };
  "0x35ed7AdC5a2EcA337D40fe0CB815Ae5650F54C7F"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0x382ce092F87Bf61e2bc63e1f5AC7fAfF864B4A1d"?: { [key: string]: string };
  "0x3CAB9D4f9f6046305147CC103AF35Bb7eeEc121B"?: { [key: string]: string };
  "0x3F797522a62824b7a76E7b88AbdcFf152d3F759A"?: { [key: string]: string };
  "0x3d042F8F941Df58E98bF80061fFE11c79806b10f"?: { [key: string]: string };
  "0x407d869158B1C623d17EEc9EA8106Fc4F5c01aFB"?: { [key: string]: string };
  "0x40a53273D6b610F4b4d8D1f3B502D28e6d4627c6"?: { [key: string]: string };
  "0x420B52A55491a09f3Af260522c85fcD4969e9bb5"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x4260B184c108784e78275523C0d2136b9fBf8f65"?: The0X4260B184C108784E78275523C0D2136B9FBf8F65Class;
  "0x42a954ac19F89EF18425a8a3574c6144D4aCE4E1"?: { [key: string]: string };
  "0x42d3a12e2753297453A36Fa0fE462523aE38b30A"?: The0X237Ae304662011EC3A549A9BeED08789Ffcc5881Class;
  "0x4527D8a5679CB1B60b9B7f29F43B9d0a40dEAAAF"?: The0X4527D8A5679CB1B60B9B7F29F43B9D0A40DEAAAFClass;
  "0x455b77c86D52041E07a82578db444F0cDA759C3D"?: { [key: string]: string };
  "0x461bFF30ec86Cb6771342cE4e5FF829351362c6D"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x4785d980cd17b13f8928082F6565E0131560d9F0"?: { [key: string]: string };
  "0x489306591531aBD20C3081E4788fAF34C91b12ea"?: { [key: string]: string };
  "0x4C5Dd86aaC5Aba4057302192eBA36BD96AC1Dc51"?: { [key: string]: string };
  "0x4C7B86fb4c705003AFF61870d12f61AA34E23936"?: { [key: string]: string };
  "0x4C90b810F67fFE487b0C19f44a02520185B4C97E"?: { [key: string]: string };
  "0x4D73344D82930F50DA5fEF43C7C8A5C942672dA0"?: { [key: string]: string };
  "0x4F4989b0A7225E8e4b3B3908920421752d30fe0B"?: { [key: string]: string };
  "0x4FdFd3539f4D9AC701e3F0370c4942833188617f"?: { [key: string]: string };
  "0x4a51c85ed6ce4cbFDca10be8a01022244571fF31"?: The0X4260B184C108784E78275523C0D2136B9FBf8F65Class;
  "0x4ad86b21787444f1890f4EeAc3a708ce010c4BCd"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0x4c4A8Fdc40F27e110147e2650aAEB99100E09EBD"?: The0X4C4A8Fdc40F27E110147E2650AAEB99100E09EBD;
  "0x4e8922d43076D05237f894Da4a625dC95EDb8E17"?: The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class;
  "0x4e9424f8E0e4109Bb8A8F27F93ed10171159404b"?: The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class;
  "0x5067522F01D22e21A8010cF0C0fc3179bC5dA969"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x50aD0CBdA30c7434912f9374e812F0c9D2A36C83"?: The0X4260B184C108784E78275523C0D2136B9FBf8F65Class;
  "0x51Fe9ed2BCD21A3B3eA10a206FfE6CE72E424FC1"?: { [key: string]: string };
  "0x52f160772Cf97ea25864c0f68851eD18fD00A21D"?: { [key: string]: string };
  "0x532B3c9b8747a40Be2D9C2eE149a8cDEe9D050f0"?: The0X4527D8A5679CB1B60B9B7F29F43B9D0A40DEAAAFClass;
  "0x551454868CF1F90c0C13B02ec1a5e5C3C58e8bE0"?: { [key: string]: string };
  "0x5527EC2b681C9A9a6764A76b0D78cb47dD47FdEB"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x561f9D8FC31F9599D0833914842d2DBf005a0dfF"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0x562b72A3c801F3b94A6Ed77411B825E57178fBBf"?: { [key: string]: string };
  "0x57460B5819Bc4447cd192fBBA36A351E5220D163"?: The0X237Ae304662011EC3A549A9BeED08789Ffcc5881Class;
  "0x57a641F3b4f6559F1f6cB643411fd64C70B0B95b"?: { [key: string]: string };
  "0x58e375B5C3Ae7C47d0374e013A5b30281201160e"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0x5D293d94f97FDcd72db6C388d8fC53eD6C41e660"?: The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class;
  "0x5e936917Fb8242d57834A45AaC23Cf6c25569577"?: The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class;
  "0x5ed586C8Efd18543735B083A9839048a07Be855C"?: { [key: string]: string };
  "0x5ff785687744C740B5F71fb7Be6C2fAD5941886B"?: { [key: string]: string };
  "0x6189ddCC72711962e68DE7A7454203f23B5C34DC"?: The0X0D332C1A2726CEE2BE7B05990075571D40589A3EClass;
  "0x61cA43FC02fd3b7973134d132f733846739Fe83e"?: { [key: string]: string };
  "0x648ad02881734c40089487d7B416CfAD67de1D05"?: { [key: string]: string };
  "0x66ebc7B79D0F4Ac696dc8640CB59Cbd788aa24aE"?: The0X66Ebc7B79D0F4Ac696Dc8640CB59Cbd788Aa24AEClass;
  "0x67DB6AA12168c45B7bcD980C19f6BA699b8a87fe"?: The0_X6;
  "0x6804D35ede2558471e921cf56E5670C64c444476"?: The0X6804D35Ede2558471E921Cf56E5670C64C444476;
  "0x6871834275498EABc84ccb797ACfE6603f41b33A"?: The0X237Ae304662011EC3A549A9BeED08789Ffcc5881Class;
  "0x69388f7eC1e30642ecB3b5A4A1965A19B5A11fD7"?: The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class;
  "0x6BC8cedfDD00E7A3d3e8aE65604B88F9239806dC"?: { [key: string]: string };
  "0x6CB27D859F758836F0969f669b1ac6CFF49BE308"?: { [key: string]: string };
  "0x6D289c4430d5825Db2Ec990Cb9A91b73Dd436Ff1"?: { [key: string]: string };
  "0x6DCB5023fb521b19D6475981ac7f5E9f5a232Cc6"?: The0X4527D8A5679CB1B60B9B7F29F43B9D0A40DEAAAFClass;
  "0x6DCFD38020Abdd5D540CcC98D03fCa0493d84317"?: { [key: string]: string };
  "0x6E4924ce97e9293835FF2420724c4B6039c220d2"?: { [key: string]: string };
  "0x6aABdC718cd01F82d2905df781F6EdA51Db3ccc2"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x6aEED8132548F7a3547c6C64c398D24BFa57156E"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x6b9892dc3018B3b11c56dED28344FA5C98C05eC5"?: The0_X6;
  "0x6cF497EF30040355d0237fEB873603e5D721fE5f"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x6cf70aE7E054782a5cd4Bc02955C5D8373320Be2"?: { [key: string]: string };
  "0x6d73C077936a31c3F108314B11B6aF170C85b825"?: { [key: string]: string };
  "0x6e527Efd6f94738881FBa7A1B32A97FE5E258aCe"?: { [key: string]: string };
  "0x6fD45FFD49b90Fd8245E12180c8A493c53aeb84B"?: The0X237Ae304662011EC3A549A9BeED08789Ffcc5881Class;
  "0x6fF8d1d634a5b76a3153605619A1F5448093d051"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x70Dd20fE5D1726F2855A9cbFB5213fA402B57286"?: { [key: string]: string };
  "0x7219550643d9D227899E0832073E3182a6C6F75B"?: { [key: string]: string };
  "0x73B1C0ece7C2E54b1DD46953C41E92d27D1E8eB9"?: { [key: string]: string };
  "0x75958d06df6d8772e4fD0cBa8da5BB71590376Ab"?: { [key: string]: string };
  "0x75ae0A0Cae23f1fa1eB3250d4C0cBAA39A9DB95e"?: { [key: string]: string };
  "0x7600b942A16c135581BBc7D80170Da3925BeA2a3"?: { [key: string]: string };
  "0x7601882e09c13da459aAa94746Dc1Bb1669993ea"?: { [key: string]: string };
  "0x76A44a248B7B48424887464dF548285bAe71Dc64"?: { [key: string]: string };
  "0x77f26dC8826a86F841fC1A2b2e8482ECCA0E1c1F"?: { [key: string]: string };
  "0x7815787c074F8061a31972AC8C9FA31e04edd41E"?: { [key: string]: string };
  "0x78e0Adb09F37746d9504Ae38d06aC1A88A6b09d9"?: { [key: string]: string };
  "0x791ea3Eb8D74a7C032d4e41812d200e290739581"?: { [key: string]: string };
  "0x79B1e0Aaa85B50d41B73dFFb5cd6E877Cf00A00D"?: { [key: string]: string };
  "0x79C6f9cc700b85d00fBb51dD543bcA7d7437Cb0c"?: { [key: string]: string };
  "0x7AA35aac86825153E81f6bA00de9d3359f87c4dF"?: The0X4260B184C108784E78275523C0D2136B9FBf8F65Class;
  "0x7BC61398711735142dC2e01806678b14Ef2f216D"?: { [key: string]: string };
  "0x7CCda8f3D15CC3c5BaA1BeeBC0D36Bf3fa77Ab0b"?: { [key: string]: string };
  "0x7DeBa03ED0962EC253327b84Ff94B82160E5BB2f"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0x7E9993033aF7F127C20b74b9D57910F213853D5E"?: { [key: string]: string };
  "0x7Fe8456baC32697Ca07fD32aC8d2a67A5ECcE064"?: The0X237Ae304662011EC3A549A9BeED08789Ffcc5881Class;
  "0x7aD79f5C9aB586AF46d23E5E47f857FEB2ef01aC"?: The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class;
  "0x7aF7f0b7038745e4D152c85b541Cb6A63883dA18"?: { [key: string]: string };
  "0x809dbB6224900fd95D4917de5025af50a5935b0a"?: { [key: string]: string };
  "0x841AFa1d05Fd2f479912Bf7998Ae8D6224150E78"?: { [key: string]: string };
  "0x84A7741f4D935Fb0353eca5c10A2F22177FEcef3"?: The0X84A7741F4D935Fb0353Eca5C10A2F22177FEcef3;
  "0x84Ad389Aa17a1B76ED90aFeafB30aea8ad9Ae61C"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x84BD66E31F4e09E3601278145F55AE9aE152234D"?: { [key: string]: string };
  "0x85f0BD2c4d0A4E14B006a21414253D238907F3B2"?: The0X85F0BD2C4D0A4E14B006A21414253D238907F3B2;
  "0x877aA1E61842cdde2D6f22a6077356a56f7DcC63"?: { [key: string]: string };
  "0x8B26c199309f4992355DF34d8243E0013a77eA5E"?: { [key: string]: string };
  "0x8BC1B0A2f901002bdAE2B203eF2aF749cA4Eb7C7"?: { [key: string]: string };
  "0x8BaC01a992Fb1b4C170182713543fb1202821b52"?: { [key: string]: string };
  "0x8Ca3C8d9040D895b18c78AffaB75703cC627277a"?: { [key: string]: string };
  "0x8EFa0E5DC35da3e38eB2DB99DFf3ca9D93980FF8"?: { [key: string]: string };
  "0x8Fae00f695F487445Aa33Ada1678051E46F38b90"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0x8b755554FeB7F15157738d336e224Fe279543A75"?: The0X237Ae304662011EC3A549A9BeED08789Ffcc5881Class;
  "0x8f6FBe24Ff6A634C1f1f1F3f4d6D2bd66448Be98"?: The0X0D332C1A2726CEE2BE7B05990075571D40589A3EClass;
  "0x8f78913a347e0F862cAf3EA95f6fE5fa82C1DD34"?: { [key: string]: string };
  "0x90834B7997f857b1a4BA06645fb81E598A4dfeF9"?: The0X4527D8A5679CB1B60B9B7F29F43B9D0A40DEAAAFClass;
  "0x918f853788084203818aE7AdfCB141d28c70942b"?: { [key: string]: string };
  "0x934ad000fBb9a7938D6850Fc7431c808BbeECEB9"?: The0X24C7FD8Df19F1D364578FCA03D996E76679B403EClass;
  "0x93C47FC42FACfB9497376b13073e324b4cCCAdC7"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0x93c5567894538CE75Fd7281d0Cb5e050eD716Baa"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x9433F58654e6ef01C52EfC75346DfBD184449DD2"?: { [key: string]: string };
  "0x9439BAC5A8E946943A44968CA12E85Be220610e0"?: { [key: string]: string };
  "0x956C8FA05657b628dFB701bF58D70ACBE96825CD"?: { [key: string]: string };
  "0x957048C45c84f9601d69941190E3a560E2EC0180"?: The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class;
  "0x95d14Ff07CDDf45713a69ac5E5340f9E12a58d27"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0x96f16846578d5Ff7ECF31E255D90068F852aE489"?: The0X237Ae304662011EC3A549A9BeED08789Ffcc5881Class;
  "0x976b291AfD37e14c71744558f1D4C213ac6B38eb"?: { [key: string]: string };
  "0x994FE803f7cA1C40E933239beded29ab18cEfbb5"?: { [key: string]: string };
  "0x99FEEAea7eB1871568DDa4b01fc544Bfed01aEca"?: { [key: string]: string };
  "0x9ADDA6762d79E76C2d88E02234e923a89A9Fc1E3"?: The0X4527D8A5679CB1B60B9B7F29F43B9D0A40DEAAAFClass;
  "0x9D5E7B080E2B563579e633654CE4615E80f7B344"?: The0X9D5E7B080E2B563579E633654CE4615E80F7B344;
  "0x9E667A0d05f00b715b6E67d2099844d6df05454B"?: { [key: string]: string };
  "0x9Ebb03eCd6a5be7a3A80E0252A013a5C2B290D06"?: { [key: string]: string };
  "0x9Fd87daDD5356ecDe322321f0BBA745ADD0FcACf"?: The0X9Fd87DaDD5356EcDe322321F0BBA745ADD0FcACFClass;
  "0x9a0af764665e907d6D624E38d80447Dde767A06A"?: { [key: string]: string };
  "0x9a5BFb2FaA8b7cbF71bb59DC42464366a8C8389e"?: { [key: string]: string };
  "0x9bb73189E3891EEf5b010410C74633e5CEDa8d7e"?: { [key: string]: string };
  "0x9e5fA2D14c6eC67eB452C93Ec15F502acE1F990F"?: { [key: string]: string };
  "0x9f1D24289eD94e5b11CF1719c0C417aC58Ea492c"?: { [key: string]: string };
  "0x9fC421cf6eE16ECCBB1a4F26837A576A6196AF51"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0xA0baB556D9b55b3C4F3a01b0b83CFc69BB842129"?: { [key: string]: string };
  "0xA12333ADC4b743A1ae298e562206dE6c7EDE8cBC"?: { [key: string]: string };
  "0xA44452bDe01fF221Ba733C608B5d6CCF215274CB"?: { [key: string]: string };
  "0xA63cc1dcb619e92f3C71fcf7Eed9f4A477427f79"?: { [key: string]: string };
  "0xA695b79D94E1fca389AA389906D9ACB866A96d63"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xAC68E95f15BcdA379ea40ef7774e227A4EC836df"?: { [key: string]: string };
  "0xAD5c68B8F79965FF4468F9FF3E2b5453f76cf091"?: The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class;
  "0xADFf732e1B65BF6360C24601D8f288881BcF939c"?: { [key: string]: string };
  "0xAaF0f557Cf609167Df71060a9713072982290D26"?: { [key: string]: string };
  "0xAff006da9f279FD2acB2ED784BF1E61bD4131F14"?: The0XAff006Da9F279FD2ACB2ED784BF1E61BD4131F14;
  "0xB104217A378f55287275445a6058Edcaf558e2ff"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0xB8AB86b378895aa6551f5471bD073376F41dda08"?: { [key: string]: string };
  "0xBECF94f440a4392D60685f4d55A0d08B9f8de3F9"?: { [key: string]: string };
  "0xBafa504Ae59b283D36108ed35Ef62e07f8A008A9"?: { [key: string]: string };
  "0xC203D1b50c7d1fffE1808a90e6DbCb2aE02c95B8"?: The0XC203D1B50C7D1FffE1808A90E6DBCb2AE02C95B8;
  "0xC88FDb8248E23f3510d22710ce1d52e76FB50B17"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xC8B0891Ae0252d5B03e8a0924c6a3A8cb8772b3b"?: The0X4527D8A5679CB1B60B9B7F29F43B9D0A40DEAAAFClass;
  "0xC9280A6b0E0Ac11c2aD7c01935027962DCF55Cad"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xC997065D0B59e25366AFe08178DCC73a3303e10e"?: { [key: string]: string };
  "0xCB63c2f3770D1b0bFBf7C1060218EEf65d1C466d"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xCe1A5Af6c6eB65Edc2f7A4028364Ac1272Ee78E3"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xD0EdFD89299e72EF5a191f83759F34371fE3267A"?: The0XD0EdFD89299E72EF5A191F83759F34371FE3267A;
  "0xD0d6a8442603c2D8324A6DdeC4392A5c63C3C1DA"?: { [key: string]: string };
  "0xD2771524d7D3BA8e9eD9C7445fcD98897A244448"?: { [key: string]: string };
  "0xD4fe583F880dF70B1F5e1cd61038cB27cedE9e66"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xD7E8e59307099F01Bb3047af0d960bfbAfEceF81"?: { [key: string]: string };
  "0xD9262FF9E0C6200EAe40E09ff9537064AbDa8a8a"?: { [key: string]: string };
  "0xDBF832c3AeA38900BC39b2BF51EDC12C39683ae6"?: { [key: string]: string };
  "0xE41f2B913d126ea2294A397bcaF01eC669165149"?: { [key: string]: string };
  "0xE43CC51FC206e5abddD43986065d97Ba58CB4Dba"?: The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class;
  "0xE5356bE0446b3c19427e8f121D4C8ba425Ee8E82"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xE7e32295eCF8F8F03983Fb3623dbe93dd4856415"?: { [key: string]: string };
  "0xEBd4e005dD4d2198E8Ea2485240B8b911622436e"?: { [key: string]: string };
  "0xED211619bcD6BFCeF6247a2D971EEAfF2f3fbE4C"?: { [key: string]: string };
  "0xEa0e2365120Ae4C320069366782460b1080264cE"?: { [key: string]: string };
  "0xEaa6A8Cec5BD6AB708e11Eb605e4AF70F3679758"?: The0X4527D8A5679CB1B60B9B7F29F43B9D0A40DEAAAFClass;
  "0xF2e9bb251fEeF8AC2a0b45E8E33E75DD81D2D220"?: The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class;
  "0xF34418099C30A2c674Bd921D53934436B3454639"?: { [key: string]: string };
  "0xF4b016F8337ae0c6548aA2D39b898B347d3aD1C2"?: { [key: string]: string };
  "0xF8871aA4db9594466a8bB448a3d355B5621374f1"?: { [key: string]: string };
  "0xFCb91B3208b7529598287E162c5BB5f7b94bAE41"?: { [key: string]: string };
  "0xFD8A4AFfFB6Cc37A7282D1039c94EDEbd22680FA"?: { [key: string]: string };
  "0xFE29c7BCD6268F455C58a0151d1647e0fc53eBF1"?: { [key: string]: string };
  "0xFbDeE107373700607c21Abbd808D91c0D5d98d05"?: { [key: string]: string };
  "0xa00995f593958e8AB3Ea47f2572639048893fBa4"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xa05FAc5119eA668B1CBEa52a9654B36831fc68fc"?: The0X66Ebc7B79D0F4Ac696Dc8640CB59Cbd788Aa24AEClass;
  "0xa08dD4327c44bECc55F09a514471936B12D6F150"?: The0X24C7FD8Df19F1D364578FCA03D996E76679B403EClass;
  "0xa356313Ca3e145dB1d381b1fFCF6feE8Ae8Ba5C9"?: { [key: string]: string };
  "0xa6F37cFf83CDCc71d6aE0D7d70C86212C8dF1927"?: { [key: string]: string };
  "0xaEF8F3f41eB110bDE26061EAEB6A12CC2B174C32"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xaFD698091fb35Dadd84F6ECA2f0245EF593E9bD1"?: { [key: string]: string };
  "0xaa8B222436f1189c5df2A48639b4325b65B0d3aa"?: { [key: string]: string };
  "0xb02969962743499269E46412B28e4C1653866F55"?: The0X4527D8A5679CB1B60B9B7F29F43B9D0A40DEAAAFClass;
  "0xb1d8186050e0eF6153EfA39627ECFD527E8e8Bb3"?: { [key: string]: string };
  "0xb430E09e27ed47301CAa6d723ee1fe82322B35eF"?: { [key: string]: string };
  "0xb65c895EF41bE430b0570fc20177d4A5b1b2e75A"?: { [key: string]: string };
  "0xb67EEcDC7953D8340e74920E6d157e400A17D33a"?: { [key: string]: string };
  "0xb702e8E21E60B847f57c94EDD69600A8f1358935"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0xbBaA612F6824ad62461E5542F43E30d3139491dc"?: { [key: string]: string };
  "0xc1b72d32cb09b071f20e724D8B05a2861e7Bb139"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xc20C6ccC9c3F8FFb5d3B533db1a917Ee66be8AbD"?: The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class;
  "0xc27Ac8c106D78A5DC37b132671B058aa34a3237B"?: The0X9Fd87DaDD5356EcDe322321F0BBA745ADD0FcACFClass;
  "0xc93C345FeFdf527d33C0e05fdE6593940562b795"?: { [key: string]: string };
  "0xcA603704094A0000bf00001d600800139Edb002B"?: The0XcA603704094A0000Bf00001D600800139Edb002B;
  "0xcAdED4720777313E03931ECC7289F6a09b0F7cE4"?: { [key: string]: string };
  "0xcEDCb001B4493aE2F623EF3309641457B93E928E"?: The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass;
  "0xcdE05cA9eE42779b943FD3EE71c662EA2D4c4cd8"?: { [key: string]: string };
  "0xd2a7D524D8D411b029de5465Ddf3C63286492141"?: The0X4527D8A5679CB1B60B9B7F29F43B9D0A40DEAAAFClass;
  "0xd2c0b592D16c6bd9568a39a0BB15D501AED20B4d"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xd5F452E0B347D36573B249772E78f97853Ca03c5"?: { [key: string]: string };
  "0xd6F22e516E0472ce461d330332F74c4d4065397c"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xdB416FEf23e69ebf530E94cEe77286B0F19414c2"?: { [key: string]: string };
  "0xdDeBcE092aADFA016f072168aF8CeB4fDc66D2A8"?: { [key: string]: string };
  "0xdbb4A20CfbA42b0A5F382F92876e6557B81516F3"?: { [key: string]: string };
  "0xdd961f32cF8BF523be5718acBDC9Ca93639fc5aA"?: { [key: string]: string };
  "0xdf2D4E6b0333b228A9cfaED204Fe4a4D4D7df77B"?: The0X24C7FD8Df19F1D364578FCA03D996E76679B403EClass;
  "0xe1A1Bf55914Ffef601e83610D8134080a0AD7EaA"?: The0X4527D8A5679CB1B60B9B7F29F43B9D0A40DEAAAFClass;
  "0xe1F8DCc994FD217051502bF4248a6e53C5D00D5A"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xe2BdD2F061cfF452a5fB97B1227612e2b1a88ddC"?: { [key: string]: string };
  "0xe3a63eF3218C4b0e7Bed43Bb87807fd59D5f624d"?: { [key: string]: string };
  "0xe725d9Fd6F6a3d3c4902E995B712dee0Bc1A6f21"?: { [key: string]: string };
  "0xe95Cc2da10A7040281d48C7C35Ab768f0635605E"?: The0X4527D8A5679CB1B60B9B7F29F43B9D0A40DEAAAFClass;
  "0xf26DcBFED1F4D281B43ae63d6ff203d3368d8795"?: { [key: string]: string };
  "0xf2e99420fa568BFbF913CCb1e3553ca26E52488D"?: The0Xf2E99420Fa568BFbF913CCb1E3553Ca26E52488D;
  "0xf35993e52ad533ecA32236884fA7BDb229882eDb"?: The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class;
  "0xf755cF60Ecc61EaB26AB74baCC7A1ee13F126f96"?: { [key: string]: string };
  "0xf8baCD13ba0E345Ee92CF8Bb8D8eA0B20988d4C5"?: { [key: string]: string };
  "0xf989A1b9Fe2F4C9441Fb380bE0dFab485E7DaE02"?: The0X237Ae304662011EC3A549A9BeED08789Ffcc5881Class;
}

export interface The0X03894FdCEac4F26BF5D15358423CE05BcaAa9785Class {
  "1": string;
}

export interface The0X0D332C1A2726CEE2BE7B05990075571D40589A3EClass {
  "8": string;
}

export interface The0X0DeDc17B6725774B68F3B78C524DeD22C7F57059Class {
  "4": string;
}

export interface The0X135440Ef6185E265B564BC6051A594F8E436F7E5 {
  "150": string;
}

export interface The0X19F23B3E3B415201F88C9ECAB63FC250803B99FbClass {
  "3": string;
}

export interface The0X237Ae304662011EC3A549A9BeED08789Ffcc5881Class {
  "5": string;
}

export interface Fluffy0X23E5Bf083FDb8E85AB7732FD3E8B4497D8C64829 {
  "1490": string;
}

export interface The0X24C7FD8Df19F1D364578FCA03D996E76679B403EClass {
  "6": string;
}

export interface The0X2BeB7950A72AA280762BBc8AA0ED3C30064C4B75 {
  "588": string;
}

export interface The0X4260B184C108784E78275523C0D2136B9FBf8F65Class {
  "9": string;
}

export interface The0X4527D8A5679CB1B60B9B7F29F43B9D0A40DEAAAFClass {
  "2": string;
}

export interface The0X4C4A8Fdc40F27E110147E2650AAEB99100E09EBD {
  "10": string;
}

export interface The0X66Ebc7B79D0F4Ac696Dc8640CB59Cbd788Aa24AEClass {
  "11": string;
}

export interface The0_X6 {
  "7": string;
}

export interface The0X6804D35Ede2558471E921Cf56E5670C64C444476 {
  "114": string;
}

export interface Fluffy0X81BEE7E18817B4170Bd49E916Ec7F7C07E5F3CAF {
  "17339856": string;
}

export interface The0X84A7741F4D935Fb0353Eca5C10A2F22177FEcef3 {
  "17": string;
}

export interface The0X85F0BD2C4D0A4E14B006A21414253D238907F3B2 {
  "20": string;
}

export interface The0X9D5E7B080E2B563579E633654CE4615E80F7B344 {
  "868": string;
}

export interface The0X9Fd87DaDD5356EcDe322321F0BBA745ADD0FcACFClass {
  "14": string;
}

export interface The0XAff006Da9F279FD2ACB2ED784BF1E61BD4131F14 {
  "91": string;
}

export interface The0XC203D1B50C7D1FffE1808A90E6DBCb2AE02C95B8 {
  "15": string;
}

export interface The0XC635A21BbE922108BfA1DCDd7D8547B28D193Ad3 {
  "41": string;
}

export interface The0XD0EdFD89299E72EF5A191F83759F34371FE3267A {
  "13": string;
}

export interface The0XcA603704094A0000Bf00001D600800139Edb002B {
  "3532": string;
}

export interface The0Xf2E99420Fa568BFbF913CCb1E3553Ca26E52488D {
  "27": string;
}

/**
 * eth_getBlockRange
 *
 * POST https://{{OPTIMISM_HOST}}/apikey/{{API_KEY}}/
 *
 * Like `eth_getBlockByNumber` but accepts a range of block numbers instead of just a single
 * block.
 *
 * **Parameters**
 *
 * 1. `QUANTITY|TAG` - integer of the starting block number for the range, or the string
 * `"earliest"`, `"latest"` or `"pending"`, as in the [default block
 * parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).
 * 2. `QUANTITY|TAG` - integer of the ending block number for the range, or the string
 * `"earliest"`, `"latest"` or `"pending"`, as in the [default block
 * parameter](https://eth.wiki/json-rpc/API#the-default-block-parameter).
 * 3. `BOOLEAN` - If `true` it returns the full transaction objects, if `false` only the
 * hashes of the transactions.
 *
 * **Returns**
 *
 * An array of `block` objects.
 * See [`eth_getBlockByHash`](https://eth.wiki/json-rpc/API#eth_getblockbyhash) for the
 * structure of a `block` object.
 */
export interface EthGetBlockRange {
  jsonrpc: string;
  id: number;
  result: EthGetBlockByHashResult[];
}

/**
 * rollup_getInfo
 *
 * POST https://{{OPTIMISM_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns useful L2-specific information about the current node.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `Object`
 * - `mode`: `STRING` - `"sequencer"` or `"verifier"` depending on the node's mode of
 * operation
 * - `syncing`: `BOOLEAN` - `true` if the node is currently syncing, `false` otherwise
 * - `ethContext`: `OBJECT`
 * - `blockNumber`: `QUANTITY` - Block number of the latest known L1 block
 * - `timestamp`: `QUANTITY` - Timestamp of the latest known L1 block
 * - `rollupContext`: `OBJECT`
 * - `queueIndex`: `QUANTITY` - Index within the CTC of the last L1 to L2 message ingested
 * - `index`: `QUANTITY` - Index of the last L2 tx processed
 * - `verifiedIndex`: `QUANTITY` - Index of the last tx that was ingested from a batch that
 * was posted to L1
 */
export interface RollupGetInfo {
  jsonrpc: string;
  id: number;
  result: RollupGetInfoResult;
}

export interface RollupGetInfoResult {
  mode: string;
  syncing: boolean;
  ethContext: EthContext;
  rollupContext: RollupContext;
}

export interface EthContext {
  blockNumber: number;
  timestamp: number;
}

export interface RollupContext {
  index: number;
  queueIndex: number;
  verifiedIndex: number;
}

/**
 * rollup_gasPrices
 *
 * POST https://{{OPTIMISM_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the L1 and L2 gas prices that are being used by the Sequencer to calculate fees.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `Object`
 * - `l1GasPrice`: `QUANTITY` - L1 gas price in wei that the Sequencer will use to estimate
 * the L1 portion of fees (calldata costs).
 * - `l2GasPrice`: `QUANTITY` - L2 gas price in wei that the Sequencer will use to estimate
 * the L2 portion of fees (execution costs).
 */
export interface RollupGasPrices {
  jsonrpc: string;
  id: number;
  result: RollupGasPricesResult;
}

export interface RollupGasPricesResult {
  l1GasPrice: string;
  l2GasPrice: string;
}

/**
 * eth_getFilterLogs
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns an array of all logs matching filter with given id.
 *
 * **Parameters**
 *
 * 1. `QUANTITY` - The filter id.`
 *
 * **Results**
 *
 * `Array` - Array of log objects, or an empty array if nothing has changed since last
 * poll.
 *
 * - For filters created with `eth_newBlockFilter` the return are block hashes (`DATA`, 32
 * Bytes), e.g. `["0x3454645634534..."]`.
 * - For filters created with `eth_newPendingTransactionFilter ` the return are transaction
 * hashes (`DATA`, 32 Bytes), e.g. `["0x6345343454645..."]`.
 * - For filters created with `eth_newFilter` logs are objects with following params:
 * - `removed`: `TAG` - `true` when the log was removed, due to a chain reorganization.
 * `false` if its a valid log.
 * - `logIndex`: `QUANTITY` - integer of the log index position in the block. `null` when
 * its pending log.
 * - `transactionIndex`: `QUANTITY` - integer of the transactions index position log was
 * created from. `null` when its pending log.
 * - `transactionHash`: `DATA`, 32 Bytes - hash of the transactions this log was created
 * from. `null` when its pending log.
 * - `blockHash`: `DATA`, 32 Bytes - hash of the block where this log was in. `null` when
 * its pending. `null` when its pending log.
 * - `blockNumber`: `QUANTITY` - the block number where this log was in. `null` when its
 * pending. `null` when its pending log.
 * - `address`: `DATA`, 20 Bytes - address from which this log originated.
 * - `data`: `DATA` - contains one or more 32 Bytes non-indexed arguments of the log.
 * - `topics`: `Array of DATA` - Array of 0 to 4 32 Bytes `DATA` of indexed log arguments.
 * (In _solidity_: The first topic is the _hash_ of the signature of the event (e.g.
 * `Deposit(address,bytes32,uint256)`), except you declared the event with the `anonymous`
 * specifier.)
 */
export interface EthGetFilterLogs {
  jsonrpc: string;
  id: number;
  result: any[];
}

/**
 * bor_getAuthor
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the address of the author.
 *
 * **Parameters**
 *
 * `BlockNumber` - (in hexadecimal format)
 *
 * **Results**
 *
 * `AUTHOR` - address
 */
export interface BorGetAuthor {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * bor_getRootHash
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the root hash of the specified block range.
 *
 * **Parameters**
 *
 * from (block number, in integer format)
 * to (block number, in integer format)
 *
 * **Results**
 *
 * `HASH` - Root hash of the given block range
 */
export interface BorGetRootHash {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * bor_getSignersAtHash
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Return signers for the given block hash.
 *
 * **Parameters**
 *
 * `blockhash` - Hash of the block to for check signers
 *
 * **Results**
 *
 * `HASH` - Signers
 */
export interface BorGetSignersAtHash {
  jsonrpc: string;
  id: number;
  result: string[];
}

/**
 * bor_getCurrentProposer
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the address of the current proposer.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `AUTHOR` - address
 */
export interface BorGetCurrentProposer {
  jsonrpc: string;
  id: number;
  result: string;
}

/**
 * bor_getCurrentValidators
 *
 * POST https://{{POLYGON_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the current validators.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * `AUTHOR` - address
 */
export interface BorGetCurrentValidators {
  jsonrpc: string;
  id: number;
  result: BorGetCurrentValidatorsResult[];
}

export interface BorGetCurrentValidatorsResult {
  ID: number;
  signer: string;
  power: number;
  accum: number;
}

/**
 * getAccountInfo
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns all information associated with the account of provided Pubkey
 *
 * **Parameters**
 *
 * - `<string>` - Pubkey of account to query, as base-58 encoded string
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` -
 * [Commitment](jsonrpc-api.md#configuring-state-commitment)
 * - (optional) `encoding: <string>` - encoding for Account data, either "base58" (_slow_),
 * "base64", "base64+zstd", or "jsonParsed".
 * "base58" is limited to Account data of less than 129 bytes.
 * "base64" will return base64 encoded data for Account data of any size.
 * "base64+zstd" compresses the Account data using
 * [Zstandard](https://facebook.github.io/zstd/) and base64-encodes the result.
 * "jsonParsed" encoding attempts to use program-specific state parsers to return more
 * human-readable and explicit account state data. If "jsonParsed" is requested but a parser
 * cannot be found, the field falls back to "base64" encoding, detectable when the `data`
 * field is type `<string>`.
 * - (optional) `dataSlice: <object>` - limit the returned account data using the provided
 * `offset: <usize>` and `length: <usize>` fields; only available for "base58", "base64" or
 * "base64+zstd" encodings.
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * The result will be an RpcResponse JSON object with `value` equal to:
 *
 * - `<null>` - if the requested account doesn't exist
 * - `<object>` - otherwise, a JSON object containing:
 * - `lamports: <u64>`, number of lamports assigned to this account, as a u64
 * - `owner: <string>`, base-58 encoded Pubkey of the program this account has been assigned
 * to
 * - `data: <[string, encoding]|object>`, data associated with the account, either as
 * encoded binary data or JSON format `{<program>: <state>}`, depending on encoding
 * parameter
 * - `executable: <bool>`, boolean indicating if the account contains a program \(and is
 * strictly read-only\)
 * - `rentEpoch: <u64>`, the epoch at which this account will next owe rent, as u64
 */
export interface GetAccountInfo {
  jsonrpc: string;
  result: GetAccountInfoResult;
  id: number;
}

export interface GetAccountInfoResult {
  context: PurpleContext;
  value: Array<PurpleValue | null> | boolean | FluffyValue | null;
}

export interface PurpleContext {
  apiVersion: SolanaCore;
  slot: number;
}

export enum SolanaCore {
  The1100 = "1.10.0",
  The11023 = "1.10.23",
  The11024 = "1.10.24",
  The11025 = "1.10.25",
  The11026 = "1.10.26",
  The11027 = "1.10.27",
  The11028 = "1.10.28",
  The11029 = "1.10.29",
  The11030 = "1.10.30",
  The11031 = "1.10.31",
  The11032 = "1.10.32",
  The1110 = "1.11.0",
  The1111 = "1.11.1",
  The1112 = "1.11.2",
  The1113 = "1.11.3",
  The1114 = "1.11.4",
  The168 = "1.6.8",
  The1714 = "1.7.14",
  The1812 = "1.8.12",
  The1814 = "1.8.14",
  The1912 = "1.9.12",
  The1914 = "1.9.14",
  The1915 = "1.9.15",
  The1920 = "1.9.20",
  The1921 = "1.9.21",
  The1922 = "1.9.22",
  The1924 = "1.9.24",
  The1925 = "1.9.25",
  The1928 = "1.9.28",
  The1930 = "1.9.30",
}

export interface PurpleValue {
  data?: string[];
  executable?: boolean;
  lamports?: number;
  owner?: string;
  rentEpoch?: number;
  address?: string;
  amount?: string;
  decimals?: number;
  uiAmount?: number;
  uiAmountString?: string;
}

export interface FluffyValue {
  data?: string[];
  executable?: boolean;
  lamports?: number;
  owner?: string;
  rentEpoch?: number;
  blockhash?: string;
  lastValidBlockHeight?: number;
  amount?: string;
  decimals?: number;
  uiAmount?: number;
  uiAmountString?: string;
}

/**
 * getBalance
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the balance of the account of provided Pubkey
 *
 * **Parameters**
 *
 * - `<string>` - Pubkey of account to query, as base-58 encoded string
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` -
 * [Commitment](jsonrpc-api.md#configuring-state-commitment)
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * - `RpcResponse<u64>` - RpcResponse JSON object with `value` field set to the balance
 */
export interface GetBalance {
  jsonrpc: string;
  result: GetBalanceResult;
  id: number;
}

export interface GetBalanceResult {
  context: PurpleContext;
  value: number;
}

/**
 * getBlock
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns identity and transaction information about a confirmed block in the ledger
 *
 * **Parameters**
 *
 * - `<u64>` - slot, as u64 integer
 * - `<object>` - (optional) Configuration object containing the following optional
 * fields:
 * - (optional) `encoding: <string>` - encoding for each returned Transaction, either
 * "json", "jsonParsed", "base58" (_slow_), "base64". If parameter not provided, the default
 * encoding is "json".
 * "jsonParsed" encoding attempts to use program-specific instruction parsers to return more
 * human-readable and explicit data in the `transaction.message.instructions` list. If
 * "jsonParsed" is requested but a parser cannot be found, the instruction falls back to
 * regular JSON encoding (`accounts`, `data`, and `programIdIndex` fields).
 * - (optional) `transactionDetails: <string>` - level of transaction detail to return,
 * either "full", "signatures", or "none". If parameter not provided, the default detail
 * level is "full".
 * - (optional) `rewards: bool` - whether to populate the `rewards` array. If parameter not
 * provided, the default includes rewards.
 * - (optional) Commitment; "processed" is not supported. If parameter not provided, the
 * default is "finalized".
 * - (optional) `maxSupportedTransactionVersion: <number>` - set the max transaction version
 * to return in responses. If the requested block contains a transaction with a higher
 * version, an error will be returned. If this parameter is omitted, only legacy
 * transactions will be returned, and a block containing any versioned transaction will
 * prompt the error.
 *
 * **Result**
 *
 * The result field will be an object with the following fields:
 *
 * - `<null>` - if specified block is not confirmed
 * - `<object>` - if block is confirmed, an object with the following fields:
 * - `blockhash: <string>` - the blockhash of this block, as base-58 encoded string
 * - `previousBlockhash: <string>` - the blockhash of this block's parent, as base-58
 * encoded string; if the parent block is not available due to ledger cleanup, this field
 * will return "11111111111111111111111111111111"
 * - `parentSlot: <u64>` - the slot index of this block's parent
 * - `transactions: <array>` - present if "full" transaction details are requested; an array
 * of JSON objects containing:
 * - `transaction: <object|[string,encoding]>` - Transaction object, either in JSON format
 * or encoded binary data, depending on encoding parameter
 * - `meta: <object>` - transaction status metadata object, containing `null` or:
 * - `err: <object | null>` - Error if transaction failed, null if transaction succeeded.
 * [TransactionError
 * definitions](https://github.com/solana-labs/solana/blob/c0c60386544ec9a9ec7119229f37386d9f070523/sdk/src/transaction/error.rs#L13)
 * - `fee: <u64>` - fee this transaction was charged, as u64 integer
 * - `preBalances: <array>` - array of u64 account balances from before the transaction was
 * processed
 * - `postBalances: <array>` - array of u64 account balances after the transaction was
 * processed
 * - `innerInstructions: <array|null>` - List of inner instructions or `null` if inner
 * instruction recording was not enabled during this transaction
 * - `preTokenBalances: <array|undefined>` - List of token balances from before the
 * transaction was processed or omitted if token balance recording was not yet enabled
 * during this transaction
 * - `postTokenBalances: <array|undefined>` - List of token balances from after the
 * transaction was processed or omitted if token balance recording was not yet enabled
 * during this transaction
 * - `logMessages: <array|null>` - array of string log messages or `null` if log message
 * recording was not enabled during this transaction
 * - DEPRECATED: `status: <object>` - Transaction status
 * - `"Ok": <null>` - Transaction was successful
 * - `"Err": <ERR>` - Transaction failed with TransactionError
 * - `loadedAddresses: <object|undefined>` - Transaction addresses loaded from address
 * lookup tables. Undefined if `maxSupportedTransactionVersion` is not set in request
 * params.
 * - `writable: <array[string]>` - Ordered list of base-58 encoded addresses for writable
 * loaded accounts
 * - `readonly: <array[string]>` - Ordered list of base-58 encoded addresses for readonly
 * loaded accounts
 * - `version: <"legacy"|number|undefined>` - Transaction version. Undefined if
 * `maxSupportedTransactionVersion` is not set in request params.
 * - `signatures: <array>` - present if "signatures" are requested for transaction details;
 * an array of signatures strings, corresponding to the transaction order in the block
 * - `rewards: <array>` - present if rewards are requested; an array of JSON objects
 * containing:
 * - `pubkey: <string>` - The public key, as base-58 encoded string, of the account that
 * received the reward
 * - `lamports: <i64>`- number of reward lamports credited or debited by the account, as a
 * i64
 * - `postBalance: <u64>` - account balance in lamports after the reward was applied
 * - `rewardType: <string|undefined>` - type of reward: "fee", "rent", "voting",
 * "staking"
 * - `commission: <u8|undefined>` - vote account commission when the reward was credited,
 * only present for voting and staking rewards
 * - `blockTime: <i64 | null>` - estimated production time, as Unix timestamp (seconds since
 * the Unix epoch). null if not available
 * - `blockHeight: <u64 | null>` - the number of blocks beneath this blockReturns identity
 * and transaction information about a confirmed block in the ledger.
 */
export interface GetBlock {
  jsonrpc: string;
  result: GetBlockResult;
  id: number;
}

export interface GetBlockResult {
  blockHeight: null;
  blockTime: null;
  blockhash: string;
  parentSlot: number;
  previousBlockhash: string;
  transactions: PurpleTransaction[];
}

export interface PurpleTransaction {
  meta: null;
  transaction: TransactionTransaction;
}

export interface TransactionTransaction {
  message: Message;
  signatures: string[];
}

export interface Message {
  accountKeys: string[];
  header: Header;
  instructions: Instruction[];
  recentBlockhash: string;
}

export interface Header {
  numReadonlySignedAccounts: number;
  numReadonlyUnsignedAccounts: number;
  numRequiredSignatures: number;
}

export interface Instruction {
  accounts: number[];
  data: string;
  programIdIndex: number;
}

/**
 * getBlockHeight
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the current block height of the node
 *
 * **Parameters**
 *
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` - Commitment
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * - `<u64>` - Current block heightReturns the current block height of the node.
 */
export interface GetBlockHeight {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * getBlockProduction
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns recent block production information from the current or previous epoch.
 *
 * **Parameters**
 *
 * - `<object>` - (optional) Configuration object containing the following optional
 * fields:
 * - (optional) [Commitment](jsonrpc-api.md#configuring-state-commitment)
 * - (optional) `range: <object>` - Slot range to return block production for. If parameter
 * not provided, defaults to current epoch.
 * - `firstSlot: <u64>` - first slot to return block production information for
 * (inclusive)
 * - (optional) `lastSlot: <u64>` - last slot to return block production information for
 * (inclusive). If parameter not provided, defaults to the highest slot
 * - (optional) `identity: <string>` - Only return results for this validator identity
 * (base-58 encoded)
 *
 * **Results**
 *
 * The result will be an RpcResponse JSON object with `value` equal to:
 *
 * - `<object>`
 * - `byIdentity: <object>` - a dictionary of validator identities,
 * as base-58 encoded strings. Value is a two element array containing the
 * number of leader slots and the number of blocks produced.
 * - `range: <object>` - Block production slot range
 * - `firstSlot: <u64>` - first slot of the block production information (inclusive)
 * - `lastSlot: <u64>` - last slot of block production information (inclusive)
 */
export interface GetBlockProduction {
  jsonrpc: string;
  result: GetBlockProductionResult;
  id: number;
}

export interface GetBlockProductionResult {
  context: PurpleContext;
  value: TentacledValue;
}

export interface TentacledValue {
  byIdentity: { [key: string]: number[] };
  range: Range;
}

export interface Range {
  firstSlot: number;
  lastSlot: number;
}

/**
 * getBlockCommitment
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns commitment for particular block
 *
 * **Parameters**
 *
 * - `<u64>` - block, identified by Slot
 *
 * **Results**
 *
 * The result field will be a JSON object containing:
 *
 * - `commitment` - commitment, comprising either:
 * - `<null>` - Unknown block
 * - `<array>` - commitment, array of u64 integers logging the amount of cluster stake in
 * lamports that has voted on the block at each depth from 0 to `MAX_LOCKOUT_HISTORY` + 1
 * - `totalStake` - total active stake, in lamports, of the current epoch
 */
export interface GetBlockCommitment {
  jsonrpc: string;
  result: GetBlockCommitmentResult;
  id: number;
}

export interface GetBlockCommitmentResult {
  commitment: null;
  totalStake: number;
}

/**
 * getBlocks
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns a list of confirmed blocks between two slots
 *
 * **Parameters**
 *
 * - `<u64>` - start_slot, as u64 integer
 * - `<u64>` - (optional) end_slot, as u64 integer (must be no more than 500,000 blocks
 * higher than the `start_slot`)
 * - (optional) Commitment; "processed" is not supported. If parameter not provided, the
 * default is "finalized".
 *
 * **Results**
 *
 * The result field will be an array of u64 integers listing confirmed blocks
 * between `start_slot` and either `end_slot`, if provided, or latest confirmed block,
 * inclusive. Max range allowed is 500,000 slots.
 */
export interface GetBlocks {
  jsonrpc: string;
  result: number[];
  id: number;
}

/**
 * getBlocksWithLimit
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns a list of confirmed blocks starting at the given slot
 *
 * **Parameters**
 *
 * - `<u64>` - start_slot, as u64 integer
 * - `<u64>` - limit, as u64 integer (must be no more than 500,000 blocks higher than the
 * `start_slot`)
 * - (optional) Commitment; "processed" is not supported. If parameter not provided, the
 * default is "finalized".
 *
 * **Results**
 *
 * The result field will be an array of u64 integers listing confirmed blocks
 * starting at `start_slot` for up to `limit` blocks, inclusive.
 */
export interface GetBlocksWithLimit {
  jsonrpc: string;
  result: number[];
  id: number;
}

/**
 * getBlockTime
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the estimated production time of a block.
 *
 * Each validator reports their UTC time to the ledger on a regular interval by
 * intermittently adding a timestamp to a Vote for a particular block. A requested block's
 * time is calculated from the stake-weighted mean of the Vote timestamps in a set of recent
 * blocks recorded on the ledger.
 *
 * **Parameters**
 *
 * - `<u64>` - block, identified by Slot
 *
 * **Results**
 *
 * - `<i64>` - estimated production time, as Unix timestamp (seconds since the Unix epoch)
 * - `<null>` - timestamp is not available for this block
 */
export interface GetBlockTime {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * getClusterNodes
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns information about all the nodes participating in the cluster
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * The result field will be an array of JSON objects, each with the following sub fields:
 *
 * - `pubkey: <string>` - Node public key, as base-58 encoded string
 * - `gossip: <string | null>` - Gossip network address for the node
 * - `tpu: <string | null>` - TPU network address for the node
 * - `rpc: <string | null>` - JSON RPC network address for the node, or `null` if the JSON
 * RPC service is not enabled
 * - `version: <string | null>` - The software version of the node, or `null` if the version
 * information is not available
 * - `featureSet: <u32 | null >` - The unique identifier of the node's feature set
 * - `shredVersion: <u16 | null>` - The shred version the node has been configured to use
 */
export interface GetClusterNodes {
  jsonrpc: string;
  result: GetClusterNodesResult[];
  id: number;
}

export interface GetClusterNodesResult {
  featureSet: number | null;
  gossip: string;
  pubkey: string;
  rpc: null | string;
  shredVersion: number;
  tpu: null | string;
  version: SolanaCore | null;
}

/**
 * getEpochInfo
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns information about the current epoch
 *
 * **Parameters**
 *
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` -Commitment
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * The result field will be an object with the following fields:
 *
 * - `absoluteSlot: <u64>`, the current slot
 * - `blockHeight: <u64>`, the current block height
 * - `epoch: <u64>`, the current epoch
 * - `slotIndex: <u64>`, the current slot relative to the start of the current epoch
 * - `slotsInEpoch: <u64>`, the number of slots in this epoch
 * - `transactionCount: <u64 | null>`, total number of transactions processed without error
 * since genesis
 */
export interface GetEpochInfo {
  jsonrpc: string;
  result: GetEpochInfoResult;
  id: number;
}

export interface GetEpochInfoResult {
  absoluteSlot: number;
  blockHeight: number;
  epoch: number;
  slotIndex: number;
  slotsInEpoch: number;
  transactionCount: number;
}

/**
 * getEpochSchedule
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns epoch schedule information from this cluster's genesis config
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * The result field will be an object with the following fields:
 *
 * - `slotsPerEpoch: <u64>`, the maximum number of slots in each epoch
 * - `leaderScheduleSlotOffset: <u64>`, the number of slots before beginning of an epoch to
 * calculate a leader schedule for that epoch
 * - `warmup: <bool>`, whether epochs start short and grow
 * - `firstNormalEpoch: <u64>`, first normal-length epoch, log2(slotsPerEpoch) -
 * log2(MINIMUM_SLOTS_PER_EPOCH)
 * - `firstNormalSlot: <u64>`, MINIMUM_SLOTS_PER_EPOCH \* (2.pow(firstNormalEpoch) - 1)
 */
export interface GetEpochSchedule {
  jsonrpc: string;
  result: GetEpochScheduleResult;
  id: number;
}

export interface GetEpochScheduleResult {
  firstNormalEpoch: number;
  firstNormalSlot: number;
  leaderScheduleSlotOffset: number;
  slotsPerEpoch: number;
  warmup: boolean;
}

/**
 * getFeeForMessage
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * **NEW: This method is only available in solana-core v1.9 or newer. Please use getFees for
 * solana-core v1.8**
 *
 * Get the fee the network will charge for a particular Message
 *
 * **Parameters**
 *
 * - `message: <string>` - Base-64 encoded Message
 * - `<object>` - (optional) Commitment (used for retrieving blockhash)
 *
 * **Results**
 *
 * - `<u64 | null>` - Fee corresponding to the message at the specified blockhash
 */
export interface GetFeeForMessage {
  jsonrpc: string;
  result: GetAccountInfoResult;
  id: number;
}

/**
 * getFirstAvailableBlock
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the slot of the lowest confirmed block that has not been purged from the ledger
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * - `<u64>` - Slot
 */
export interface GetFirstAvailableBlock {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * getGenesisHash
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the genesis hash
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * - `<string>` - a Hash as base-58 encoded string
 */
export interface GetGenesisHash {
  jsonrpc: string;
  result: string;
  id: number;
}

/**
 * getHealth
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the current health of the node.
 *
 * If one or more `--known-validator` arguments are provided to `solana-validator`, "ok" is
 * returned when the node has within `HEALTH_CHECK_SLOT_DISTANCE` slots of the highest known
 * validator, otherwise an error is returned. "ok" is always returned if no known validators
 * are provided.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * - If the node is healthy: "ok"
 * - If the node is unhealthy, a JSON RPC error response is returned. The specifics of the
 * error response are **UNSTABLE** and may change in the future
 */
export interface GetHealth {
  jsonrpc: string;
  result: string;
  id: number;
}

/**
 * getHighestSnapshotSlot
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * **NEW: This method is only available in solana-core v1.9 or newer. Please use
 * getSnapshotSlot for solana-core v1.8**
 *
 * Returns the highest slot information that the node has snapshots for.
 *
 * This will find the highest full snapshot slot, and the highest incremental snapshot slot
 * _based on_ the full snapshot slot, if there is one.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * - `<object>`
 * - `full: <u64>` - Highest full snapshot slot
 * - `incremental: <u64 | undefined>` - Highest incremental snapshot slot _based on_ `full`
 */
export interface GetHighestSnapshotSlot {
  jsonrpc: string;
  result: GetHighestSnapshotSlotResult;
  id: number;
}

export interface GetHighestSnapshotSlotResult {
  full: number;
  incremental: number;
}

/**
 * getIdentity
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the identity pubkey for the current node
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * The result field will be a JSON object with the following fields:
 *
 * - `identity`, the identity pubkey of the current node \(as a base-58 encoded string\)
 */
export interface GetIdentity {
  jsonrpc: string;
  result: GetIdentityResult;
  id: number;
}

export interface GetIdentityResult {
  identity: string;
}

/**
 * getInflationGovernor
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the current inflation governor
 *
 * **Parameters**
 *
 * - `<object>` - (optional) Commitment
 *
 * **Results**
 *
 * The result field will be a JSON object with the following fields:
 *
 * - `initial: <f64>`, the initial inflation percentage from time 0
 * - `terminal: <f64>`, terminal inflation percentage
 * - `taper: <f64>`, rate per year at which inflation is lowered.
 * Rate reduction is derived using the target slot time in genesis config
 * - `foundation: <f64>`, percentage of total inflation allocated to the foundation
 * - `foundationTerm: <f64>`, duration of foundation pool inflation in yearsReturns the
 * current inflation governor.
 */
export interface GetInflationGovernor {
  jsonrpc: string;
  result: GetInflationGovernorResult;
  id: number;
}

export interface GetInflationGovernorResult {
  foundation: number;
  foundationTerm: number;
  initial: number;
  taper: number;
  terminal: number;
}

/**
 * getInflationRate
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the specific inflation values for the current epoch
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * The result field will be a JSON object with the following fields:
 *
 * - `total: <f64>`, total inflation
 * - `validator: <f64>`, inflation allocated to validators
 * - `foundation: <f64>`, inflation allocated to the foundation
 * - `epoch: <u64>`, epoch for which these values are valid
 */
export interface GetInflationRate {
  jsonrpc: string;
  result: GetInflationRateResult;
  id: number;
}

export interface GetInflationRateResult {
  epoch: number;
  foundation: number;
  total: number;
  validator: number;
}

/**
 * getInflationReward
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the inflation / staking reward for a list of addresses for an epoch
 *
 * **Parameters**
 *
 * - `<array>` - An array of addresses to query, as base-58 encoded strings
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` -
 * [Commitment](jsonrpc-api.md#configuring-state-commitment)
 * - (optional) `epoch: <u64>` - An epoch for which the reward occurs. If omitted, the
 * previous epoch will be used
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * The result field will be a JSON array with the following fields:
 *
 * - `epoch: <u64>`, epoch for which reward occured
 * - `effectiveSlot: <u64>`, the slot in which the rewards are effective
 * - `amount: <u64>`, reward amount in lamports
 * - `postBalance: <u64>`, post balance of the account in lamports
 * - `commission: <u8|undefined>` - vote account commission when the reward was credited
 */
export interface GetInflationReward {
  jsonrpc: string;
  result: Array<GetInflationRewardResult | null>;
  id: number;
}

export interface GetInflationRewardResult {
  amount: number;
  effectiveSlot: number;
  epoch: number;
  postBalance: number;
}

/**
 * getLargestAccount
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the 20 largest accounts, by lamport balance (results may be cached up to two
 * hours)
 *
 * **Parameters**
 *
 * - `<object>` - (optional) Configuration object containing the following optional
 * fields:
 * - (optional) [Commitment](jsonrpc-api.md#configuring-state-commitment)
 * - (optional) `filter: <string>` - filter results by account type; currently supported:
 * `circulating|nonCirculating`
 *
 * **Results**
 *
 * The result will be an RpcResponse JSON object with `value` equal to an array of:
 *
 * - `<object>` - otherwise, a JSON object containing:
 * - `address: <string>`, base-58 encoded address of the account
 * - `lamports: <u64>`, number of lamports in the account, as a u64
 */
export interface GetLargestAccount {
  jsonrpc: string;
  result: GetLargestAccountResult;
  id: number;
}

export interface GetLargestAccountResult {
  context: FluffyContext;
  value: StickyValue[];
}

export interface FluffyContext {
  slot: number;
}

export interface StickyValue {
  lamports: number;
  address: string;
}

/**
 * getLatestBlockhash
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * **NEW: This method is only available in solana-core v1.9 or newer. Please use
 * getRecentBlockhash for solana-core v1.8**
 *
 * Returns the latest blockhash
 *
 * **Parameters**
 *
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` - Commitment (used for retrieving blockhash)
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * - `RpcResponse<object>` - RpcResponse JSON object with `value` field set to a JSON object
 * including:
 * - `blockhash: <string>` - a Hash as base-58 encoded string
 * - `lastValidBlockHeight: <u64>` - last block height at which the blockhash will be valid
 */
export interface GetLatestBlockhash {
  jsonrpc: string;
  result: GetAccountInfoResult;
  id: number;
}

/**
 * getMaxRetransmitSlot
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Get the max slot seen from retransmit stage.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * - `<u64>` - Slot
 */
export interface GetMaxRetransmitSlot {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * getMaxShredInsertSlot
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Get the max slot seen from after shred insert.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * - `<u64>` - Slot
 */
export interface GetMaxShredInsertSlot {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * getMinimumBalanceForRentExemption
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns minimum balance required to make account rent exempt.
 *
 * **Parameters**
 *
 * - `<usize>` - account data length
 * - `<object>` - (optional) Commitment
 *
 * **Results**
 *
 * - `<u64>` - minimum lamports required in account
 */
export interface GetMinimumBalanceForRentExemption {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * getMultipleAccounts
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the account information for a list of Pubkeys.
 *
 * **Parameters**
 *
 * - `<array>` - An array of Pubkeys to query, as base-58 encoded strings (up to a maximum
 * of 100).
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` - Commitment
 * - (optional) `encoding: <string>` - encoding for Account data, either "base58" (_slow_),
 * "base64", "base64+zstd", or "jsonParsed".
 * "base58" is limited to Account data of less than 129 bytes.
 * "base64" will return base64 encoded data for Account data of any size.
 * "base64+zstd" compresses the Account data using Zstandard and base64-encodes the
 * result.
 * "jsonParsed" encoding attempts to use program-specific state parsers to return more
 * human-readable and explicit account state data. If "jsonParsed" is requested but a parser
 * cannot be found, the field falls back to "base64" encoding, detectable when the `data`
 * field is type `<string>`.
 * - (optional) `dataSlice: <object>` - limit the returned account data using the provided
 * `offset: <usize>` and `length: <usize>` fields; only available for "base58", "base64" or
 * "base64+zstd" encodings.
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * The result will be an RpcResponse JSON object with `value` equal to:
 *
 * An array of:
 *
 * - `<null>` - if the account at that Pubkey doesn't exist
 * - `<object>` - otherwise, a JSON object containing:
 * - `lamports: <u64>`, number of lamports assigned to this account, as a u64
 * - `owner: <string>`, base-58 encoded Pubkey of the program this account has been assigned
 * to
 * - `data: <[string, encoding]|object>`, data associated with the account, either as
 * encoded binary data or JSON format `{<program>: <state>}`, depending on encoding
 * parameter
 * - `executable: <bool>`, boolean indicating if the account contains a program \(and is
 * strictly read-only\)
 * - `rentEpoch: <u64>`, the epoch at which this account will next owe rent, as u64
 */
export interface GetMultipleAccounts {
  jsonrpc: string;
  result: GetAccountInfoResult;
  id: number;
}

/**
 * getProgramAccounts
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns all accounts owned by the provided program Pubkey
 *
 * **Parameters**
 *
 * - `<string>` - Pubkey of program, as base-58 encoded string
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` - Commitment
 * - (optional) `encoding: <string>` - encoding for Account data, either "base58" (_slow_),
 * "base64", "base64+zstd", or "jsonParsed".
 * "base58" is limited to Account data of less than 129 bytes.
 * "base64" will return base64 encoded data for Account data of any size.
 * "base64+zstd" compresses the Account data using Zstandard and base64-encodes the
 * result.
 * "jsonParsed" encoding attempts to use program-specific state parsers to return more
 * human-readable and explicit account state data. If "jsonParsed" is requested but a parser
 * cannot be found, the field falls back to "base64" encoding, detectable when the `data`
 * field is type `<string>`.
 * - (optional) `dataSlice: <object>` - limit the returned account data using the provided
 * `offset: <usize>` and `length: <usize>` fields; only available for "base58", "base64" or
 * "base64+zstd" encodings.
 * - (optional) `filters: <array>` - filter results using up to 4 filter objects; account
 * must meet all filter criteria to be included in results
 * - (optional) `withContext: bool` - wrap the result in an RpcResponse JSON object.
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * - **Filters**
 *
 * - `memcmp: <object>` - compares a provided series of bytes with program account data at a
 * particular offset. Fields:
 *
 * - `offset: <usize>` - offset into program account data to start comparison
 * - `bytes: <string>` - data to match, as encoded string
 * - `encoding: <string>` - encoding for filter `bytes` data, either "base58" or "base64".
 * Data is limited in size to 128 or fewer decoded bytes.
 *
 * **NEW: This field, and base64 support generally, is only available in solana-core v1.11.5
 * or newer. Please omit when querying nodes on earlier versions**
 *
 * - `dataSize: <u64>` - compares the program account data length with the provided data
 * size
 *
 * **Results**
 *
 * By default the result field will be an array of JSON objects. If `withContext` flag is
 * set the array will be wrapped in an RpcResponse JSON object.
 *
 * The array will contain:
 *
 * - `pubkey: <string>` - the account Pubkey as base-58 encoded string
 * - `account: <object>` - a JSON object, with the following sub fields:
 * - `lamports: <u64>`, number of lamports assigned to this account, as a u64
 * - `owner: <string>`, base-58 encoded Pubkey of the program this account has been assigned
 * to
 * - `data: <[string,encoding]|object>`, data associated with the account, either as encoded
 * binary data or JSON format `{<program>: <state>}`, depending on encoding parameter
 * - `executable: <bool>`, boolean indicating if the account contains a program \(and is
 * strictly read-only\)
 * - `rentEpoch: <u64>`, the epoch at which this account will next owe rent, as u64
 */
export interface GetProgramAccounts {
  jsonrpc: string;
  result: GetProgramAccountsResult[];
  id: number;
}

export interface GetProgramAccountsResult {
  account: ResultAccount;
  pubkey: string;
}

export interface ResultAccount {
  data: string;
  executable: boolean;
  lamports: number;
  owner: string;
  rentEpoch: number;
}

/**
 * getRecentPerformanceSamples
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns a list of recent performance samples, in reverse slot order. Performance samples
 * are taken every 60 seconds and include the number of transactions and slots that occur in
 * a given time window.
 *
 * **Parameters**
 *
 * - `limit: <usize>` - (optional) number of samples to return (maximum 720)
 *
 * **Results**
 *
 * An array of:
 *
 * - `RpcPerfSample<object>`
 * - `slot: <u64>` - Slot in which sample was taken at
 * - `numTransactions: <u64>` - Number of transactions in sample
 * - `numSlots: <u64>` - Number of slots in sample
 * - `samplePeriodSecs: <u16>` - Number of seconds in a sample window
 */
export interface GetRecentPerformanceSamples {
  jsonrpc: string;
  result: GetRecentPerformanceSamplesResult[];
  id: number;
}

export interface GetRecentPerformanceSamplesResult {
  numSlots: number;
  numTransactions: number;
  samplePeriodSecs: number;
  slot: number;
}

/**
 * getSignaturesForAddress
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns signatures for confirmed transactions that include the given address in their
 * `accountKeys` list. Returns signatures backwards in time from the provided signature or
 * most recent confirmed block
 *
 * **Parameters**
 *
 * - `<string>` - account address as base-58 encoded string
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `limit: <number>` - maximum transaction signatures to return (between 1 and
 * 1,000, default: 1,000).
 * - (optional) `before: <string>` - start searching backwards from this transaction
 * signature.
 * If not provided the search starts from the top of the highest max confirmed block.
 * - (optional) `until: <string>` - search until this transaction signature, if found before
 * limit reached.
 * - (optional) `commitment: <string>` - Commitment
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * The result field will be an array of transaction signature information, ordered
 * from newest to oldest transaction:
 *
 * - `<object>`
 * - `signature: <string>` - transaction signature as base-58 encoded string
 * - `slot: <u64>` - The slot that contains the block with the transaction
 * - `err: <object | null>` - Error if transaction failed, null if transaction succeeded.
 * [TransactionError
 * definitions](https://github.com/solana-labs/solana/blob/c0c60386544ec9a9ec7119229f37386d9f070523/sdk/src/transaction/error.rs#L13)
 * - `memo: <string |null>` - Memo associated with the transaction, null if no memo is
 * present
 * - `blockTime: <i64 | null>` - estimated production time, as Unix timestamp (seconds since
 * the Unix epoch) of when transaction was processed. null if not available.
 */
export interface GetSignaturesForAddress {
  jsonrpc: string;
  result: GetSignaturesForAddressResult[];
  id: number;
}

export interface GetSignaturesForAddressResult {
  blockTime: number;
  confirmationStatus: string;
  err: null;
  memo: null;
  signature: string;
  slot: number;
}

/**
 * getSignatureStatuses
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the statuses of a list of signatures. Unless the `searchTransactionHistory`
 * configuration parameter is included, this method only searches the recent status cache of
 * signatures, which retains statuses for all active slots plus `MAX_RECENT_BLOCKHASHES`
 * rooted slots.
 *
 * **Parameters**
 *
 * - `<array>` - An array of transaction signatures to confirm, as base-58 encoded strings
 * (up to a maximum of 256)
 * - `<object>` - (optional) Configuration object containing the following field:
 * - `searchTransactionHistory: <bool>` - if true, a Solana node will search its ledger
 * cache for any signatures not found in the recent status cache
 *
 * **Results**
 *
 * An RpcResponse containing a JSON object consisting of an array of TransactionStatus
 * objects.
 *
 * - `RpcResponse<object>` - RpcResponse JSON object with `value` field:
 *
 * An array of:
 *
 * - `<null>` - Unknown transaction
 * - `<object>`
 * - `slot: <u64>` - The slot the transaction was processed
 * - `confirmations: <usize | null>` - Number of blocks since signature confirmation, null
 * if rooted, as well as finalized by a supermajority of the cluster
 * - `err: <object | null>` - Error if transaction failed, null if transaction succeeded.
 * [TransactionError
 * definitions](https://github.com/solana-labs/solana/blob/c0c60386544ec9a9ec7119229f37386d9f070523/sdk/src/transaction/error.rs#L13)
 * - `confirmationStatus: <string | null>` - The transaction's cluster confirmation status;
 * either `processed`, `confirmed`, or `finalized`. See Commitment for more on optimistic
 * confirmation.
 * - DEPRECATED: `status: <object>` - Transaction status
 * - `"Ok": <null>` - Transaction was successful
 * - `"Err": <ERR>` - Transaction failed with TransactionError
 */
export interface GetSignatureStatuses {
  jsonrpc: string;
  result: GetAccountInfoResult;
  id: number;
}

/**
 * getSlot
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the slot that has reached the given or default commitment level
 *
 * **Parameters**
 *
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` - Commitment
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * - `<u64>` - Current slot
 */
export interface GetSlot {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * getSlotLeader
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the current slot leader
 *
 * **Parameters**
 *
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` - Commitment
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * - `<string>` - Node identity Pubkey as base-58 encoded string
 */
export interface GetSlotLeader {
  jsonrpc: string;
  result: string;
  id: number;
}

/**
 * getSlotLeaders
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the slot leaders for a given slot range
 *
 * **Parameters**
 *
 * - `<u64>` - Start slot, as u64 integer
 * - `<u64>` - Limit, as u64 integer (between 1 and 5,000)
 *
 * **Results**
 *
 * - `<array[string]>` - Node identity public keys as base-58 encoded strings
 */
export interface GetSlotLeaders {
  jsonrpc: string;
  result: GetSlotLeadersResult[];
  id: number;
}

export enum GetSlotLeadersResult {
  Awes4Tr6TX8JDzEhCZY2QVNIMT6ID1ZWHzf1VNyGvpLM = "Awes4Tr6TX8JDzEhCZY2QVNimT6iD1zWHzf1vNyGvpLM",
  BXAxLMMMUNYfC1Z166VjWHR3WjTmqzLxB837O5GhmRtH = "BXAxLMMMUNYfC1z166VjWHR3WjTmqzLxB837o5ghmRtH",
  FSVdqBzx5D4UsqBLnvmH5DFx2DCm1PTPAbQWJ1PYzTJ2 = "FSVdqBzx5D4UsqBLnvmH5dFx2dCm1pTPAbQWJ1PYzTJ2",
}

/**
 * getStakeActivation
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns epoch activation information for a stake account
 *
 * **Parameters**
 *
 * - `<string>` - Pubkey of stake account to query, as base-58 encoded string
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` - Commitment
 * - (optional) `epoch: <u64>` - epoch for which to calculate activation details. If
 * parameter not provided, defaults to current epoch.
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * The result will be a JSON object with the following fields:
 *
 * - `state: <string` - the stake account's activation state, one of: `active`, `inactive`,
 * `activating`, `deactivating`
 * - `active: <u64>` - stake active during the epoch
 * - `inactive: <u64>` - stake inactive during the epoch
 */
export interface GetStakeActivation {
  jsonrpc: string;
  result: GetStakeActivationResult;
  id: number;
}

export interface GetStakeActivationResult {
  active: number;
  inactive: number;
  state: string;
}

/**
 * getTokenAccountBalance
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the token balance of an SPL Token account.
 *
 * **Parameters**
 *
 * - `<string>` - Pubkey of Token account to query, as base-58 encoded string
 * - `<object>` - (optional) Commitment
 *
 * **Results**
 *
 * The result will be an RpcResponse JSON object with `value` equal to a JSON object
 * containing:
 *
 * - `amount: <string>` - the raw balance without decimals, a string representation of u64
 * - `decimals: <u8>` - number of base 10 digits to the right of the decimal place
 * - `uiAmount: <number | null>` - the balance, using mint-prescribed decimals
 * **DEPRECATED**
 * - `uiAmountString: <string>` - the balance as a string, using mint-prescribed decimals
 */
export interface GetTokenAccountBalance {
  jsonrpc: string;
  result: GetTokenAccountBalanceResult;
}

export interface GetTokenAccountBalanceResult {
  context: FluffyContext;
  value: UITokenAmountClass;
  id: number;
}

export interface UITokenAmountClass {
  amount: string;
  decimals: number;
  uiAmount: number | null;
  uiAmountString: string;
  address?: string;
}

/**
 * getTokenAccountsByDelegate
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns all SPL Token accounts by approved Delegate.
 *
 * **Parameters**
 *
 * - `<string>` - Pubkey of account delegate to query, as base-58 encoded string
 * - `<object>` - Either:
 * - `mint: <string>` - Pubkey of the specific token Mint to limit accounts to, as base-58
 * encoded string; or
 * - `programId: <string>` - Pubkey of the Token program that owns the accounts, as base-58
 * encoded string
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` - Commitment
 * - (optional) `encoding: <string>` - encoding for Account data, either "base58" (_slow_),
 * "base64", "base64+zstd", or "jsonParsed".
 * "base58" is limited to Account data of less than 129 bytes.
 * "base64" will return base64 encoded data for Account data of any size.
 * "base64+zstd" compresses the Account data using
 * [Zstandard](https://facebook.github.io/zstd/) and base64-encodes the result.
 * "jsonParsed" encoding attempts to use program-specific state parsers to return more
 * human-readable and explicit account state data. If "jsonParsed" is requested but a parser
 * cannot be found, the field falls back to "base64" encoding, detectable when the `data`
 * field is type `<string>`.
 * - (optional) `dataSlice: <object>` - limit the returned account data using the provided
 * `offset: <usize>` and `length: <usize>` fields; only available for "base58", "base64" or
 * "base64+zstd" encodings.
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * The result will be an RpcResponse JSON object with `value` equal to an array of JSON
 * objects, which will contain:
 *
 * - `pubkey: <string>` - the account Pubkey as base-58 encoded string
 * - `account: <object>` - a JSON object, with the following sub fields:
 * - `lamports: <u64>`, number of lamports assigned to this account, as a u64
 * - `owner: <string>`, base-58 encoded Pubkey of the program this account has been assigned
 * to
 * - `data: <object>`, Token state data associated with the account, either as encoded
 * binary data or in JSON format `{<program>: <state>}`
 * - `executable: <bool>`, boolean indicating if the account contains a program \(and is
 * strictly read-only\)
 * - `rentEpoch: <u64>`, the epoch at which this account will next owe rent, as u64
 *
 * When the data is requested with the `jsonParsed` encoding a format similar to that of the
 * Token Balances Structure can be expected inside the structure, both for the `tokenAmount`
 * and the `delegatedAmount`, with the latter being an optional object.
 */
export interface GetTokenAccountsByDelegate {
  jsonrpc: string;
  result: GetTokenAccountsByDelegateResult;
  id: number;
}

export interface GetTokenAccountsByDelegateResult {
  context: FluffyContext;
  value: IndigoValue[];
}

export interface IndigoValue {
  account: ValueAccount;
  pubkey: string;
}

export interface ValueAccount {
  data: Data;
  executable: boolean;
  lamports: number;
  owner: string;
  rentEpoch: number;
}

export interface Data {
  program: string;
  parsed: Parsed;
  space: number;
}

export interface Parsed {
  info: Info;
  type: string;
}

export interface Info {
  tokenAmount: UITokenAmountClass;
  delegate: string;
  delegatedAmount: UITokenAmountClass;
  state: string;
  isNative: boolean;
  mint: string;
  owner: string;
}

/**
 * getTokenAccountsByOwner
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns all SPL Token accounts by token owner.
 *
 * **Parameters**
 *
 * - `<string>` - Pubkey of account owner to query, as base-58 encoded string
 * - `<object>` - Either:
 * - `mint: <string>` - Pubkey of the specific token Mint to limit accounts to, as base-58
 * encoded string; or
 * - `programId: <string>` - Pubkey of the Token program that owns the accounts, as base-58
 * encoded string
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` - Commitment
 * - (optional) `encoding: <string>` - encoding for Account data, either "base58" (_slow_),
 * "base64", "base64+zstd", or "jsonParsed".
 * "base58" is limited to Account data of less than 129 bytes.
 * "base64" will return base64 encoded data for Account data of any size.
 * "base64+zstd" compresses the Account data using
 * [Zstandard](https://facebook.github.io/zstd/) and base64-encodes the result.
 * "jsonParsed" encoding attempts to use program-specific state parsers to return more
 * human-readable and explicit account state data. If "jsonParsed" is requested but a parser
 * cannot be found, the field falls back to "base64" encoding, detectable when the `data`
 * field is type `<string>`.
 * - (optional) `dataSlice: <object>` - limit the returned account data using the provided
 * `offset: <usize>` and `length: <usize>` fields; only available for "base58", "base64" or
 * "base64+zstd" encodings.
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * The result will be an RpcResponse JSON object with `value` equal to an array of JSON
 * objects, which will contain:
 *
 * - `pubkey: <string>` - the account Pubkey as base-58 encoded string
 * - `account: <object>` - a JSON object, with the following sub fields:
 * - `lamports: <u64>`, number of lamports assigned to this account, as a u64
 * - `owner: <string>`, base-58 encoded Pubkey of the program this account has been assigned
 * to
 * - `data: <object>`, Token state data associated with the account, either as encoded
 * binary data or in JSON format `{<program>: <state>}`
 * - `executable: <bool>`, boolean indicating if the account contains a program \(and is
 * strictly read-only\)
 * - `rentEpoch: <u64>`, the epoch at which this account will next owe rent, as u64
 *
 * When the data is requested with the `jsonParsed` encoding a format similar to that of the
 * Token Balances Structure can be expected inside the structure, both for the `tokenAmount`
 * and the `delegatedAmount`, with the latter being an optional object.
 */
export interface GetTokenAccountsByOwner {
  jsonrpc: string;
  result: GetAccountInfoResult;
  id: number;
}

/**
 * getTokenLargestAccounts
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the 20 largest accounts of a particular SPL Token type.
 *
 * **Parameters**
 *
 * - `<string>` - Pubkey of token Mint to query, as base-58 encoded string
 * - `<object>` - (optional) Commitment
 *
 * **Results**
 *
 * The result will be an RpcResponse JSON object with `value` equal to an array of JSON
 * objects containing:
 *
 * - `address: <string>` - the address of the token account
 * - `amount: <string>` - the raw token account balance without decimals, a string
 * representation of u64
 * - `decimals: <u8>` - number of base 10 digits to the right of the decimal place
 * - `uiAmount: <number | null>` - the token account balance, using mint-prescribed decimals
 * **DEPRECATED**
 * - `uiAmountString: <string>` - the token account balance as a string, using
 * mint-prescribed decimals
 */
export interface GetTokenLargestAccounts {
  jsonrpc: string;
  result: GetAccountInfoResult;
  id: number;
}

/**
 * getTokenSupply
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the total supply of an SPL Token type.
 *
 * **Parameters**
 *
 * - `<string>` - Pubkey of token Mint to query, as base-58 encoded string
 * - `<object>` - (optional) [Commitment](jsonrpc-api.md#configuring-state-commitment)
 *
 * **Results**
 *
 * The result will be an RpcResponse JSON object with `value` equal to a JSON object
 * containing:
 *
 * - `amount: <string>` - the raw total token supply without decimals, a string
 * representation of u64
 * - `decimals: <u8>` - number of base 10 digits to the right of the decimal place
 * - `uiAmount: <number | null>` - the total token supply, using mint-prescribed decimals
 * **DEPRECATED**
 * - `uiAmountString: <string>` - the total token supply as a string, using mint-prescribed
 * decimals
 */
export interface GetTokenSupply {
  jsonrpc: string;
  result: GetAccountInfoResult;
  id: number;
}

/**
 * getTransaction
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns transaction details for a confirmed transaction
 *
 * **Parameters**
 *
 * - `<string>` - transaction signature as base-58 encoded string
 * - `<object>` - (optional) Configuration object containing the following optional
 * fields:
 * - (optional) `encoding: <string>` - encoding for each returned Transaction, either
 * "json", "jsonParsed", "base58" (_slow_), "base64". If parameter not provided, the default
 * encoding is "json".
 * "jsonParsed" encoding attempts to use program-specific instruction parsers to return more
 * human-readable and explicit data in the `transaction.message.instructions` list. If
 * "jsonParsed" is requested but a parser cannot be found, the instruction falls back to
 * regular JSON encoding (`accounts`, `data`, and `programIdIndex` fields).
 * - (optional) Commitment; "processed" is not supported. If parameter not provided, the
 * default is "finalized".
 * - (optional) `maxSupportedTransactionVersion: <number>` - set the max transaction version
 * to return in responses. If the requested transaction is a higher version, an error will
 * be returned. If this parameter is omitted, only legacy transactions will be returned, and
 * any versioned transaction will prompt the error.
 *
 * **Results**
 *
 * - `<null>` - if transaction is not found or not confirmed
 * - `<object>` - if transaction is confirmed, an object with the following fields:
 * - `slot: <u64>` - the slot this transaction was processed in
 * - `transaction: <object|[string,encoding]>` - Transaction object, either in JSON format
 * or encoded binary data, depending on encoding parameter
 * - `blockTime: <i64 | null>` - estimated production time, as Unix timestamp (seconds since
 * the Unix epoch) of when the transaction was processed. null if not available
 * - `meta: <object | null>` - transaction status metadata object:
 * - `err: <object | null>` - Error if transaction failed, null if transaction succeeded.
 * [TransactionError
 * definitions](https://docs.rs/solana-sdk/VERSION_FOR_DOCS_RS/solana_sdk/transaction/enum.TransactionError.html)
 * - `fee: <u64>` - fee this transaction was charged, as u64 integer
 * - `preBalances: <array>` - array of u64 account balances from before the transaction was
 * processed
 * - `postBalances: <array>` - array of u64 account balances after the transaction was
 * processed
 * - `innerInstructions: <array|null>` - List of inner instructions or `null` if inner
 * instruction recording was not enabled during this transaction
 * - `preTokenBalances: <array|undefined>` - List of token balances from before the
 * transaction was processed or omitted if token balance recording was not yet enabled
 * during this transaction
 * - `postTokenBalances: <array|undefined>` - List of token balances from after the
 * transaction was processed or omitted if token balance recording was not yet enabled
 * during this transaction
 * - `logMessages: <array|null>` - array of string log messages or `null` if log message
 * recording was not enabled during this transaction
 * - DEPRECATED: `status: <object>` - Transaction status
 * - `"Ok": <null>` - Transaction was successful
 * - `"Err": <ERR>` - Transaction failed with TransactionError
 * - `rewards: <array>` - present if rewards are requested; an array of JSON objects
 * containing:
 * - `pubkey: <string>` - The public key, as base-58 encoded string, of the account that
 * received the reward
 * - `lamports: <i64>`- number of reward lamports credited or debited by the account, as a
 * i64
 * - `postBalance: <u64>` - account balance in lamports after the reward was applied
 * - `rewardType: <string>` - type of reward: currently only "rent", other types may be
 * added in the future
 * - `commission: <u8|undefined>` - vote account commission when the reward was credited,
 * only present for voting and staking rewards
 * - `loadedAddresses: <object|undefined>` - Transaction addresses loaded from address
 * lookup tables. Undefined if `maxSupportedTransactionVersion` is not set in request
 * params.
 * - `writable: <array[string]>` - Ordered list of base-58 encoded addresses for writable
 * loaded accounts
 * - `readonly: <array[string]>` - Ordered list of base-58 encoded addresses for readonly
 * loaded accounts
 * - `version: <"legacy"|number|undefined>` - Transaction version. Undefined if
 * `maxSupportedTransactionVersion` is not set in request params.Returns transaction details
 * for a confirmed transaction.
 */
export interface GetTransaction {
  jsonrpc: string;
  result: GetTransactionResult;
  id: number;
}

export interface GetTransactionResult {
  blockTime: number;
  meta: Meta;
  slot: number;
  transaction: TransactionTransaction;
}

export interface Meta {
  err: Err;
  fee: number;
  innerInstructions: InnerInstruction[];
  loadedAddresses: LoadedAddresses;
  logMessages: string[];
  postBalances: number[];
  postTokenBalances: TokenBalance[];
  preBalances: number[];
  preTokenBalances: TokenBalance[];
  rewards: any[];
  status: Status;
}

export interface Err {
  InstructionError: Array<InstructionErrorClass | number>;
}

export interface InstructionErrorClass {
  Custom: number;
}

export interface InnerInstruction {
  index: number;
  instructions: Instruction[];
}

export interface LoadedAddresses {
  readonly: any[];
  writable: any[];
}

export interface TokenBalance {
  accountIndex: number;
  mint: Mint;
  owner: string;
  uiTokenAmount: UITokenAmountClass;
}

export enum Mint {
  So11111111111111111111111111111111111111112 = "So11111111111111111111111111111111111111112",
  The7DHbWXmci3DT8UFYWYZweBLXgycu7Y3IL6TrKn1Y7ARj = "7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj",
}

export interface Status {
  Err: Err;
}

/**
 * getTransactionCount
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the current Transaction count from the ledger
 *
 * **Parameters**
 *
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` - Commitment
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * - `<u64>` - count
 */
export interface GetTransactionCount {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * getVersion
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the current solana versions running on the node
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * The result field will be a JSON object with the following fields:
 *
 * - `solana-core`, software version of solana-core
 * - `feature-set`, unique identifier of the current software's feature set
 */
export interface GetVersion {
  jsonrpc: string;
  result: GetVersionResult;
  id: number;
}

export interface GetVersionResult {
  "feature-set": number;
  "solana-core": SolanaCore;
}

/**
 * getVoteAccounts
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the account info and associated stake for all the voting accounts in the current
 * bank.
 *
 * **Parameters**
 *
 * - `<object>` - (optional) Configuration object containing the following field:
 * - (optional) Commitment
 * - (optional) `votePubkey: <string>` - Only return results for this validator vote address
 * (base-58 encoded)
 * - (optional) `keepUnstakedDelinquents: <bool>` - Do not filter out delinquent validators
 * with no stake
 * - (optional) `delinquentSlotDistance: <u64>` - Specify the number of slots behind the tip
 * that a validator must fall to be considered delinquent. **NOTE:** For the sake of
 * consistency between ecosystem products, _it is **not** recommended that this argument be
 * specified._
 *
 * **Results**
 *
 * The result field will be a JSON object of `current` and `delinquent` accounts,
 * each containing an array of JSON objects with the following sub fields:
 *
 * - `votePubkey: <string>` - Vote account address, as base-58 encoded string
 * - `nodePubkey: <string>` - Validator identity, as base-58 encoded string
 * - `activatedStake: <u64>` - the stake, in lamports, delegated to this vote account and
 * active in this epoch
 * - `epochVoteAccount: <bool>` - bool, whether the vote account is staked for this epoch
 * - `commission: <number>`, percentage (0-100) of rewards payout owed to the vote account
 * - `lastVote: <u64>` - Most recent slot voted on by this vote account
 * - `epochCredits: <array>` - History of how many credits earned by the end of each epoch,
 * as an array of arrays containing: `[epoch, credits, previousCredits]`
 */
export interface GetVoteAccounts {
  jsonrpc: string;
  result: GetVoteAccountsResult;
  id: number;
}

export interface GetVoteAccountsResult {
  current: Ent[];
  delinquent: Ent[];
}

export interface Ent {
  activatedStake: number;
  commission: number;
  epochCredits: Array<number[]>;
  epochVoteAccount: boolean;
  lastVote: number;
  nodePubkey: string;
  rootSlot: number;
  votePubkey: string;
}

/**
 * isBlockhashValid
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * **NEW: This method is only available in solana-core v1.9 or newer. Please use
 * getFeeCalculatorForBlockhash for solana-core v1.8**
 *
 * Returns whether a blockhash is still valid or not
 *
 * **Parameters**
 *
 * - `blockhash: <string>` - the blockhash of this block, as base-58 encoded string
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - (optional) `commitment: <string>` - Commitment (used for retrieving blockhash)
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * - `<bool>` - True if the blockhash is still valid
 */
export interface IsBlockhashValid {
  jsonrpc: string;
  result: GetAccountInfoResult;
  id: number;
}

/**
 * minimumLedgerSlot
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Returns the lowest slot that the node has information about in its ledger. This value may
 * increase over time if the node is configured to purge older ledger data
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * - `u64` - Minimum ledger slot
 */
export interface MinimumLedgerSlot {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * sendTransaction
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Submits a signed transaction to the cluster for processing.
 *
 * **Parameters**
 *
 * - `<string>` - fully-signed Transaction, as encoded string
 * - `<object>` - (optional) Configuration object containing the following field:
 * - `skipPreflight: <bool>` - if true, skip the preflight transaction checks (default:
 * false)
 * - `preflightCommitment: <string>` - (optional) Commitment) level to use for preflight
 * (default: `"finalized"`).
 * - `encoding: <string>` - (optional) Encoding used for the transaction data. Either
 * `"base58"` (_slow_, **DEPRECATED**), or `"base64"`. (default: `"base58"`).
 * - `maxRetries: <usize>` - (optional) Maximum number of times for the RPC node to retry
 * sending the transaction to the leader.
 * If this parameter not provided, the RPC node will retry the transaction until it is
 * finalized or until the blockhash expires.
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * - `<string>` - First Transaction Signature embedded in the transaction, as base-58
 * encoded string transaction id
 */
export interface SendTransaction {
  jsonrpc: string;
  result: string;
  id: number;
}

/**
 * simulateTransaction
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Simulate sending a transaction
 *
 * **Parameters**
 *
 * - `<string>` - Transaction, as an encoded string. The transaction must have a valid
 * blockhash, but is not required to be signed.
 * - `<object>` - (optional) Configuration object containing the following fields:
 * - `sigVerify: <bool>` - if true the transaction signatures will be verified (default:
 * false, conflicts with `replaceRecentBlockhash`)
 * - `commitment: <string>` - (optional) Commitment level to simulate the transaction at
 * (default: `"finalized"`).
 * - `encoding: <string>` - (optional) Encoding used for the transaction data. Either
 * `"base58"` (_slow_, **DEPRECATED**), or `"base64"`. (default: `"base58"`).
 * - `replaceRecentBlockhash: <bool>` - (optional) if true the transaction recent blockhash
 * will be replaced with the most recent blockhash.
 * (default: false, conflicts with `sigVerify`)
 * - `accounts: <object>` - (optional) Accounts configuration object containing the
 * following fields:
 * - `encoding: <string>` - (optional) encoding for returned Account data, either "base64"
 * (default), "base64+zstd" or "jsonParsed".
 * "jsonParsed" encoding attempts to use program-specific state parsers to return more
 * human-readable and explicit account state data. If "jsonParsed" is requested but a parser
 * cannot be found, the field falls back to binary encoding, detectable when the `data`
 * field is type `<string>`.
 * - `addresses: <array>` - An array of accounts to return, as base-58 encoded strings
 * - (optional) `minContextSlot: <number>` - set the minimum slot that the request can be
 * evaluated at.
 *
 * **Results**
 *
 * An RpcResponse containing a TransactionStatus object
 * The result will be an RpcResponse JSON object with `value` set to a JSON object with the
 * following fields:
 *
 * - `err: <object | string | null>` - Error if transaction failed, null if transaction
 * succeeded. [TransactionError
 * definitions](https://github.com/solana-labs/solana/blob/c0c60386544ec9a9ec7119229f37386d9f070523/sdk/src/transaction/error.rs#L13)
 * - `logs: <array | null>` - Array of log messages the transaction instructions output
 * during execution, null if simulation failed before the transaction was able to execute
 * (for example due to an invalid blockhash or signature verification failure)
 * - `accounts: <array | null>` - array of accounts with the same length as the
 * `accounts.addresses` array in the request
 * - `<null>` - if the account doesn't exist or if `err` is not null
 * - `<object>` - otherwise, a JSON object containing:
 * - `lamports: <u64>`, number of lamports assigned to this account, as a u64
 * - `owner: <string>`, base-58 encoded Pubkey of the program this account has been assigned
 * to
 * - `data: <[string, encoding]|object>`, data associated with the account, either as
 * encoded binary data or JSON format `{<program>: <state>}`, depending on encoding
 * parameter
 * - `executable: <bool>`, boolean indicating if the account contains a program \(and is
 * strictly read-only\)
 * - `rentEpoch: <u64>`, the epoch at which this account will next owe rent, as u64
 * - `unitsConsumed: <u64 | undefined>`, The number of compute budget units consumed during
 * the processing of this transaction
 * - `returnData: <object | null>` - the most-recent return data generated by an instruction
 * in the transaction, with the following fields:
 * - `programId: <string>`, the program that generated the return data, as base-58 encoded
 * Pubkey
 * - `data: <[string, encoding]>`, the return data itself, as base-64 encoded binary data
 */
export interface SimulateTransaction {
  jsonrpc: string;
  result: SimulateTransactionResult;
  id: number;
}

export interface SimulateTransactionResult {
  context: FluffyContext;
  value: IndecentValue;
}

export interface IndecentValue {
  err: null;
  accounts: null;
  logs: string[];
  returnData: ReturnData;
  unitsConsumed: number;
}

export interface ReturnData {
  data: string[];
  programId: string;
}

/**
 * accountSubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Subscribe to an account to receive notifications when the lamports or data for a given
 * account public key changes
 *
 * **Parameters**
 *
 * - `<string>` - account Pubkey, as base-58 encoded string
 * - `<object>` - (optional) Configuration object containing the following optional
 * fields:
 * - `<object>` - (optional) Commitment
 * - `encoding: <string>` - encoding for Account data, either "base58" (_slow_), "base64",
 * "base64+zstd" or "jsonParsed".
 * "jsonParsed" encoding attempts to use program-specific state parsers to return more
 * human-readable and explicit account state data. If "jsonParsed" is requested but a parser
 * cannot be found, the field falls back to binary encoding, detectable when the `data`
 * field is type `<string>`.
 *
 * **Results**
 *
 * - `<number>` - Subscription id \(needed to unsubscribe\)
 */
export interface AccountSubscribe {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * accountUnsubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Unsubscribe from account change notifications
 *
 * **Parameters**
 *
 * - `<number>` - id of account Subscription to cancel
 *
 * **Results**
 *
 * - `<bool>` - unsubscribe success message
 */
export interface AccountUnsubscribe {
  jsonrpc: string;
  result: boolean;
  id: number;
}

/**
 * blockSubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * **This subscription is unstable and only available if the validator was started with the
 * `--rpc-pubsub-enable-block-subscription` flag. The format of this subscription may change
 * in the future**
 *
 * Subscribe to receive notification anytime a new block is Confirmed or Finalized.
 *
 * **Parameters**
 *
 * - `filter: <string>|<object>` - filter criteria for the logs to receive results by
 * account type; currently supported:
 * - "all" - include all transactions in block
 * - `{ "mentionsAccountOrProgram": <string> }` - return only transactions that mention the
 * provided public key (as base-58 encoded string). If no mentions in a given block, then no
 * notification will be sent.
 * - `<object>` - (optional) Configuration object containing the following optional
 * fields:
 * - (optional) Commitment
 * - (optional) `encoding: <string>` - encoding for Account data, either "base58" (_slow_),
 * "base64", "base64+zstd" or "jsonParsed".
 * "jsonParsed" encoding attempts to use program-specific state parsers to return more
 * human-readable and explicit account state data. If "jsonParsed" is requested but a parser
 * cannot be found, the field falls back to base64 encoding, detectable when the `data`
 * field is type `<string>`. Default is "base64".
 * - (optional) `transactionDetails: <string>` - level of transaction detail to return,
 * either "full", "signatures", or "none". If parameter not provided, the default detail
 * level is "full".
 * - (optional) `showRewards: bool` - whether to populate the `rewards` array. If parameter
 * not provided, the default includes rewards.
 *
 * **Results**
 *
 * - `integer` - subscription id \(needed to unsubscribe\)
 */
export interface BlockSubscribe {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * blockUnsubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Unsubscribe from block notifications
 *
 * **Parameters**
 *
 * - `<integer>` - subscription id to cancel
 *
 * **Results**
 *
 * - `<bool>` - unsubscribe success message
 */
export interface BlockUnsubscribe {
  jsonrpc: string;
  result: boolean;
  id: number;
}

/**
 * logsSubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Subscribe to transaction logging
 *
 * **Parameters**
 *
 * - `filter: <string>|<object>` - filter criteria for the logs to receive results by
 * account type; currently supported:
 * - "all" - subscribe to all transactions except for simple vote transactions
 * - "allWithVotes" - subscribe to all transactions including simple vote transactions
 * - `{ "mentions": [ <string> ] }` - subscribe to all transactions that mention the
 * provided Pubkey (as base-58 encoded string)
 * - `<object>` - (optional) Configuration object containing the following optional
 * fields:
 * - (optional) Commitment
 *
 * **Results**
 *
 * - `<integer>` - Subscription id \(needed to unsubscribe\)
 */
export interface LogsSubscribe {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * logsUnsubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Unsubscribe from transaction logging
 *
 * **Parameters**
 *
 * - `<integer>` - id of subscription to cancel
 *
 * **Results**
 *
 * - `<bool>` - unsubscribe success message
 */
export interface LogsUnsubscribe {
  jsonrpc: string;
  result: boolean;
  id: number;
}

/**
 * programSubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Subscribe to a program to receive notifications when the lamports or data for a given
 * account owned by the program changes
 *
 * **Parameters**
 *
 * - `<string>` - program_id Pubkey, as base-58 encoded string
 * - `<object>` - (optional) Configuration object containing the following optional
 * fields:
 * - (optional) Commitment
 * - `encoding: <string>` - encoding for Account data, either "base58" (_slow_), "base64",
 * "base64+zstd" or "jsonParsed".
 * "jsonParsed" encoding attempts to use program-specific state parsers to return more
 * human-readable and explicit account state data. If "jsonParsed" is requested but a parser
 * cannot be found, the field falls back to base64 encoding, detectable when the `data`
 * field is type `<string>`.
 * - (optional) `filters: <array>` - filter results using various filter objects; account
 * must meet all filter criteria to be included in results
 *
 * **Results**
 *
 * - `<integer>` - Subscription id \(needed to unsubscribe\)
 */
export interface ProgramSubscribe {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * programUnsubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Unsubscribe from program-owned account change notifications
 *
 * **Parameters**
 *
 * - `<integer>` - id of account Subscription to cancel
 *
 * **Results**
 *
 * - `<bool>` - unsubscribe success message
 */
export interface ProgramUnsubscribe {
  jsonrpc: string;
  result: boolean;
  id: number;
}

/**
 * signatureSubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Subscribe to a transaction signature to receive notification when the transaction is
 * confirmed On `signatureNotification`, the subscription is automatically cancelled
 *
 * **Parameters**
 *
 * - `<string>` - Transaction Signature, as base-58 encoded string
 * - `<object>` - (optional) Commitment
 *
 * **Results**
 *
 * - `integer` - subscription id \(needed to unsubscribe\)
 */
export interface SignatureSubscribe {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * signatureUnsubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Unsubscribe from signature confirmation notification
 *
 * **Parameters**
 *
 * - `<integer>` - subscription id to cancel
 *
 * **Results**
 *
 * - `<bool>` - unsubscribe success message
 */
export interface SignatureUnsubscribe {
  jsonrpc: string;
  result: boolean;
  id: number;
}

/**
 * slotSubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Subscribe to receive notification anytime a slot is processed by the validator
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * - `integer` - subscription id \(needed to unsubscribe\)
 */
export interface SlotSubscribe {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * slotUnsubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Unsubscribe from slot notifications
 *
 * **Parameters**
 *
 * - `<integer>` - subscription id to cancel
 *
 * **Results**
 *
 * - `<bool>` - unsubscribe success message
 */
export interface SlotUnsubscribe {
  jsonrpc: string;
  result: boolean;
  id: number;
}

/**
 * slotsUpdatesSubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * **This subscription is unstable; the format of this subscription may change in the future
 * and it may not always be supported**
 *
 * Subscribe to receive a notification from the validator on a variety of updates on every
 * slot
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * - `integer` - subscription id \(needed to unsubscribe\)
 */
export interface SlotsUpdatesSubscribe {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * slotsUpdatesUnsubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Unsubscribe from slot-update notifications
 *
 * **Parameters**
 *
 * - `<integer>` - subscription id to cancel
 *
 * **Results**
 *
 * - `<bool>` - unsubscribe success message
 */
export interface SlotsUpdatesUnsubscribe {
  jsonrpc: string;
  result: boolean;
  id: number;
}

/**
 * rootSubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Subscribe to receive notification anytime a new root is set by the validator.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * - `integer` - subscription id \(needed to unsubscribe\)
 */
export interface RootSubscribe {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * rootUnsubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Unsubscribe from root notifications
 *
 * **Parameters**
 *
 * - `<integer>` - subscription id to cancel
 *
 * **Results**
 *
 * - `<bool>` - unsubscribe success message
 */
export interface RootUnsubscribe {
  jsonrpc: string;
  result: boolean;
  id: number;
}

/**
 * voteSubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * **This subscription is unstable and only available if the validator was started with the
 * `--rpc-pubsub-enable-vote-subscription` flag. The format of this subscription may change
 * in the future**
 *
 * Subscribe to receive notification anytime a new vote is observed in gossip. These votes
 * are pre-consensus therefore there is no guarantee these votes will enter the ledger.
 *
 * **Parameters**
 *
 * None
 *
 * **Results**
 *
 * - `integer` - subscription id \(needed to unsubscribe\)
 */
export interface VoteSubscribe {
  jsonrpc: string;
  result: number;
  id: number;
}

/**
 * voteUnsubscribe
 *
 * POST https://{{SOL_HOST}}/apikey/{{API_KEY}}/
 *
 * Unsubscribe from vote notifications
 *
 * **Parameters**
 *
 * - `<integer>` - subscription id to cancel
 *
 * **Results**
 *
 * - `<bool>` - unsubscribe success message
 */
export interface VoteUnsubscribe {
  jsonrpc: string;
  result: boolean;
  id: number;
}
