import { Controller, Get } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('/api/auth/')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}
