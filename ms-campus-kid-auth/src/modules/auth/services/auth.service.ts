import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { User, UserDocument, TokenWhitelist, TokenWhitelistDocument } from '../schemas';
import { LoginInput, LoginOutput, UserOutput } from '../types';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(TokenWhitelist.name) private tokenWhiteListModel: Model<TokenWhitelistDocument>
    ) { }

    async login(loginData: LoginInput): Promise<LoginOutput> {
        const user = await this.userService.findByEmail(loginData.email.toLowerCase());
        if (!user) throw new UnauthorizedException();
        const encryptedPassword = bcrypt.hashSync(loginData.password, user.salt);
        if (user.encryptedPassword != encryptedPassword) throw new UnauthorizedException();
        const payload = { email: user.email, role: user.role };
        const accessToken = this.jwtService.sign(payload);
        this.tokenWhiteListModel.create({ token: accessToken, createdAt: new Date() });
        return { ...payload, accessToken };
    }

    async authorize(accessToken: string): Promise<LoginOutput> {
        const savedToken = await this.tokenWhiteListModel.findOne({ token: accessToken });
        if (!savedToken) throw new UnauthorizedException();
        try {
            const { email, role } = await this.jwtService.verifyAsync<UserOutput>(accessToken)
            return { email, role, accessToken }
        } catch (e) {
            throw new UnauthorizedException();
        }
    }
}
