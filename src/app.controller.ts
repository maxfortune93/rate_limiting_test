/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { seconds, Throttle } from '@nestjs/throttler';

// UseGuards(ThrottlerGuard)
@Controller()
@Throttle({ default: { limit: 3, ttl: seconds(60) } })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.count('GET /hello');
    return this.appService.getHello();
  }
}
