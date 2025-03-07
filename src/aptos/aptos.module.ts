import { Global, Module } from '@nestjs/common';
import { AptosService } from './aptos.service';

@Global()
@Module({
  imports: [],
  providers: [AptosService],
  exports: [AptosService],
})
export class AptosModule {}
