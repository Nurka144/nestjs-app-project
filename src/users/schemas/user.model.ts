import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({required: true})
    firstname: String

    @Prop({required: true})
    lastname: String

    @Prop({required: true, unique: true})
    email: String

    @Prop({required: true})
    password: String

    @Prop({default: null})
    access_token: String

    @Prop()
    create_user: String

    @Prop()
    update_user: String

    @Prop({required: true, default: Date.now()})
    create_date: Date

    @Prop({required: true, default: Date.now()})
    update_date: Date

}

export const UserSchema = SchemaFactory.createForClass(User);