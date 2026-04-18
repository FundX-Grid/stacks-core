export type NetworkType = 'mainnet' | 'testnet' | 'devnet';

export interface StacksConfig {
  network: NetworkType;
  apiUrl?: string;
}
