import { StacksConfig, NetworkType } from './types';
import { NETWORKS } from './config';

export class StacksClient {
  public readonly network: NetworkType;
  public readonly apiUrl: string;

  constructor(config: StacksConfig) {
    this.network = config.network;
    this.apiUrl = config.apiUrl ?? NETWORKS[config.network];
  }

  async getAccountBalance(address: string): Promise<number> {
    const res = await fetch(`${this.apiUrl}/v2/accounts/${address}`);
    const data = await res.json();
    return parseInt(data.balance, 16);
  }
}
