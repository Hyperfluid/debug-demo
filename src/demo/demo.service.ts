import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AptosService } from 'src/aptos/aptos.service';

@Injectable()
export class DemoService {
  constructor(private readonly aptosService: AptosService) {}

  @Cron('*/2 * * * * *')
  async handleCron() {
    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
      this.aptosService.getRoutePrice(
        '0x357b0b74bc833e95a115ad22604854d6b0fca151cecd94111770e5d6ffc9dc2b',
        '0x000000000000000000000000000000000000000000000000000000000000000a',
        10000,
        [
          '0xfbcd47491f4e2ba0c309dd7e297cb5ce805689b05fd95377d9bfa4a11eafdd2e',
          '0x925660b8618394809f89f8002e2926600c775221f43bf1919782b297a79400d8',
        ],
      );
    }
  }
}
