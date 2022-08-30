export interface Eth2 {
  accounts: string[];
  chain_id: ChainID;
  rewards: Reward[];
  epoch?: string;
  network: Network;
  validator: string;
  time: Date;
}

export enum ChainID {
  Mainnet = "mainnet",
}

export enum Network {
  Ethereum = "ethereum",
}

export interface Reward {
  text: string;
  currency: Currency;
  numeric: number;
  exp: number;
}

export enum Currency {
  Eth = "ETH",
  Sol = "SOL",
}

export interface Sol {
  accounts: string[];
  chain_id: ChainID;
  rewards: Reward[];
  epoch: string;
  network: string;
  validator: string;
  time: Date;
}
