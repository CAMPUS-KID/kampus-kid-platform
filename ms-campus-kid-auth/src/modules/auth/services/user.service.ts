import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoleEnum } from '../enums';
import { User, UserDocument, TokenWhitelist, TokenWhitelistDocument } from '../schemas';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(TokenWhitelist.name) private tokenWhiteListModel: Model<TokenWhitelistDocument>
    ) { }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.userModel.findOne({ email });
    }

    async create(email: string, password: string, role: RoleEnum): Promise<User> {
        const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS));
        const encryptedPassword = bcrypt.hashSync(password, salt);
        return this.userModel.create({ email, encryptedPassword, salt, role })
    }
}
