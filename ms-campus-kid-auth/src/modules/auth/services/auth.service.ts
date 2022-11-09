import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument, TokenWhitelist, TokenWhitelistDocument } from '../schemas';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(TokenWhitelist.name) private tokenWhiteListModel: Model<TokenWhitelistDocument>
    ) { }

    getHello(): string {
        return 'ms-campus-kid-auth is running';
    }
}
