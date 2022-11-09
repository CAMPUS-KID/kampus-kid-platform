import { Body, Controller, Headers, Post, Req, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../services';
import { AuthService } from '../services/auth.service';
import { LoginInput, LoginOutput } from '../types';

@Controller('/api/auth/')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) { }

  @Post('login')
  async login(@Body() loginData: LoginInput): Promise<LoginOutput> {
    return this.authService.login(loginData);
  }

  @Post('authorize')
  async authorize(@Headers('Authorization') authorization: string): Promise<LoginOutput> {
    if (!authorization || !authorization.startsWith('Bearer ')) throw new UnauthorizedException();
    return this.authService.authorize(authorization.substring(7, authorization.length));
  }
}
