import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { RoleEnum } from '../enums';
import { User } from '../schemas';
import { UserService } from '../services';
import { UserInput, UserOutput } from '../types';

@Controller('/api/users/')
export class UserController {
    constructor(private readonly service: UserService) { }

    @Post()
    async create(@Body() user: UserInput): Promise<UserOutput> {
        const { email, role } = await this.service.create(user);
        return { email, role }
    }
}
