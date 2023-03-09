import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculateDTORequest } from './dto/calculate-request.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('calculate')
  calculate(@Body() calculateDTORequest: CalculateDTORequest): string {
    return this.appService.calculate(calculateDTORequest);
  }
}
