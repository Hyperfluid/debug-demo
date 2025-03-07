import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AptosModule } from './aptos/aptos.module';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [ScheduleModule.forRoot(), AptosModule, DemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
