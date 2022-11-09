import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController, UserController } from './controllers';
import { AuthService, UserService } from './services';
import { User, UserSchema, TokenWhitelist, TokenWhitelistSchema } from './schemas';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: TokenWhitelist.name, schema: TokenWhitelistSchema }])],
    controllers: [AuthController, UserController],
    providers: [AuthService, UserService],
})
export class AuthModule { }