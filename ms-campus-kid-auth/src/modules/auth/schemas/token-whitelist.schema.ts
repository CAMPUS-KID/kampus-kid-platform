import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';

export type TokenWhitelistDocument = HydratedDocument<TokenWhitelist>;

@Schema()
export class TokenWhitelist {
    @Prop({ required: true })
    token: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop({ required: true })
    createdAt: Date;
}

export const TokenWhitelistSchema = SchemaFactory.createForClass(TokenWhitelist);