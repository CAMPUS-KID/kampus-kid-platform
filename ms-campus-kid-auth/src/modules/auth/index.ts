import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController, UserController } from './controllers';
import { AuthService, UserService } from './services';
import { User, UserSchema, TokenWhitelist, TokenWhitelistSchema } from './schemas';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'secret',
            signOptions: { expiresIn: `${process.env.JWT_DURATION_IN_HOURS || 24}h` },
        }),
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: TokenWhitelist.name, schema: TokenWhitelistSchema }
        ])
    ],
    controllers: [AuthController, UserController],
    providers: [AuthService, UserService],
})
export class AuthModule { }