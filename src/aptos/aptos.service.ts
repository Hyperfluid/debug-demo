import {
  Aptos,
  AptosConfig,
  InputViewFunctionData,
  Network,
} from '@aptos-labs/ts-sdk';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AptosService {
  aptos: Aptos;

  constructor() {
    const aptosConfig = new AptosConfig({ network: Network.MAINNET });
    this.aptos = new Aptos(aptosConfig);
  }

  private logger = new Logger(AptosService.name);

  async getRoutePrice(
    from: string,
    to: string,
    amount: number,
    route: string[],
  ) {
    const payload: InputViewFunctionData = {
      function:
        '0x8b4a2c4bb53857c718a04c020b98f8c2e1f99a68b0f57389a8bf5434cd22e05c::router_v3::get_batch_amount_out',
      typeArguments: [],
      functionArguments: [route, amount, from, to],
    };
    this.logger.debug(`getRoutePrice payload: ${JSON.stringify(payload)}`);
    const response = await this.aptos.view<string[]>({ payload });
    this.logger.debug(`getRoutePrice response: ${JSON.stringify(response)}`);
  }
}
