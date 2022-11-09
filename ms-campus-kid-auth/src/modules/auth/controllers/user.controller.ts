import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { RoleEnum } from '../enums';
import { User } from '../schemas';
import { UserService } from '../services';

@Controller('/api/users/')
export class UserController {
    constructor(private readonly service: UserService) { }

    @Post()
    create(@Body('email') email: string, @Body('password') password: string, @Body('role') role: RoleEnum): Promise<User> {
        return this.service.create(email, password, role);
    }
}
