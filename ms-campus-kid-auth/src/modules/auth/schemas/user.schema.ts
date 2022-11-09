import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { RoleEnum } from '../enums';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    role: RoleEnum;

    @Prop({ required: true })
    encryptedPassword: string;

    @Prop({ required: true })
    salt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);